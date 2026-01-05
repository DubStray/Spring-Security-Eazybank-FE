import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

/**
 * Guard per la protezione delle rotte tramite Keycloak.
 * Estende KeycloakAuthGuard per gestire la logica di accesso in base all'autenticazione e ai ruoli.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthKeyClockGuard extends KeycloakAuthGuard {

  constructor(protected override readonly router: Router, protected readonly keycloak: KeycloakService) {
    super(router, keycloak);
  }

  /**
   * Verifica se l'accesso alla rotta è consentito.
   * 
   * @param route Snapshot della rotta attivata
   * @param state Snapshot dello stato del router
   * @returns Promessa booleana che indica se l'accesso è consentito
   */
  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    // Se l'utente non è autenticato, forza il login reindirizzando a Keycloak.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }

    // Recupera i ruoli richiesti dai dati della rotta (nella configurazione del routing).
    const requiredRoles = route.data['roles'];

    // Se non sono specificati ruoli richiesti, l'accesso è consentito a chiunque sia autenticato.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Consente l'accesso solo se l'utente possiede TUTTI i ruoli richiesti.
    // Nota: la logica qui richiede 'every' (tutti i ruoli). Se si volesse 'almeno uno', si userebbe 'some'.
    return requiredRoles.every((role) => this.roles.includes(role));
  }
}