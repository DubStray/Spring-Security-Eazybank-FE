// Route guard: mantiene le rotte protette dietro a un controllo di sessione.
// Suggerimento: usa un AuthService dedicato per incapsulare recupero/validazione sessione.
import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { User } from '../model/user.model';

@Injectable()
export class AuthActivateRouteGuard {
  user = new User();

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Recupera l’utente dalla session storage; un controllo JWT/token sarebbe più robusto.
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if (this.user.email.length === 0) {
      this.router.navigate(['login']);
    }
    return this.user.email.length !== 0 ? true : false;
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  // Wrapper funzionale per riusare la logica della classe nelle definizioni di rotta.
  return inject(AuthActivateRouteGuard).canActivate(next, state);
};
