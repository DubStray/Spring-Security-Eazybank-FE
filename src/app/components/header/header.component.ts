import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

/**
 * Componente Header (Intestazione).
 * Gestisce la barra di navigazione superiore, il menu, e lo stato di login/logout.
 * Interagisce con Keycloak per gestire la sessione utente.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = new User();

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService) { }

  /**
   * Inizializzazione: verifica lo stato di login tramite Keycloak.
   * Se loggato, carica il profilo utente e aggiorna il sessionStorage.
   */
  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      this.user.authStatus = 'AUTH';
      this.user.name = this.userProfile.firstName || "";
      this.user.email = this.userProfile.email || "";
      // Salva i dettagli utente per renderli accessibili ad altri componenti (es. Dashboard, Account).
      window.sessionStorage.setItem("userdetails", JSON.stringify(this.user));

    }
  }

  /**
   * Avvia il flusso di login tramite Keycloak.
   * Reindirizza l'utente alla pagina di login del server Keycloak.
   */
  public login() {
    this.keycloak.login();
  }

  /**
   * Effettua il logout.
   * Chiude la sessione Keycloak e reindirizza alla home page.
   */
  public logout() {
    let redirectURI: string = "http://localhost:4200/home";
    this.keycloak.logout(redirectURI);
  }

}