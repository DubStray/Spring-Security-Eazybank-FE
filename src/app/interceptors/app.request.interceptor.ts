// Handler HTTP trasversale: aggancia header auth + XSRF a ogni richiesta in uscita.
// Suggerimento: l’HttpInterceptor centralizza la decorazione delle richieste così i componenti restano ignari del trasporto.
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/model/user.model';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  user = new User();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Partiamo da header vuoti per aggiungere solo ciò che serve.
    let httpHeaders = new HttpHeaders();
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    // Crea l’header Basic Auth dalle credenziali cache; in produzione preferisci token.
    if (this.user && this.user.password && this.user.email) {
      httpHeaders = httpHeaders.append(
        'Authorization',
        'Basic ' + window.btoa(this.user.email + ':' + this.user.password)
      );
    }

    // Propaga il token XSRF atteso da Spring Security.
    let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if (xsrf) {
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }

    // X-Requested-With segnala al server che è una richiesta AJAX.
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders,
    });
    return next.handle(xhr).pipe(
      tap((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          // Su risposta 401 lo lascia sul dashboard; in alternativa potresti reindirizzare al login per chiarezza.
          this.router.navigate(['dashboard']);
        }
      })
    );
  }
}
