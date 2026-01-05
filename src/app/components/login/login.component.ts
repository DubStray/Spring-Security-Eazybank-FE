import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { getCookie } from 'typescript-cookie';

/**
 * Componente di Login.
 * Gestisce l'autenticazione dell'utente tramite il servizio di Login.
 * Nota: In questa configurazione con Keycloak, questo form potrebbe essere bypassato
 * se si usa il redirect diretto a Keycloak, ma è mantenuto per compatibilità o flussi custom.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authStatus: string = '';
  model = new User();

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Valida le credenziali utente inviandole al backend.
   * Gestisce il salvataggio del token JWT (se presente nell'header Authorization),
   * dei dettagli utente e del token XSRF nel sessionStorage.
   * Infine reindirizza alla dashboard.
   * 
   * @param loginForm Il form contenente username e password
   */
  validateUser(loginForm: NgForm) {
    this.loginService
      .validateLoginDetails(this.model)
      .subscribe((responseData) => {
        // Estrae il token JWT dall'header Authorization (se l'architettura lo prevede qui)
        window.sessionStorage.setItem(
          'Authorization',
          responseData.headers.get('Authorization')!
        );
        
        // Aggiorna il modello con i dati ricevuti dal backend
        this.model = <any>responseData.body;
        this.model.authStatus = 'AUTH';
        
        // Salva i dettagli utente in sessione
        window.sessionStorage.setItem(
          'userdetails',
          JSON.stringify(this.model)
        );
        
        // Gestione token anti-CSRF (XSRF)
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem('XSRF-TOKEN', xsrf);
        
        // Naviga alla dashboard dopo il successo
        this.router.navigate(['dashboard']);
      });
  }
}
