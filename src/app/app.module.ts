// Modulo root di Angular: punto di ingresso dell'applicazione.
// Configura le dipendenze, i componenti e le logiche trasversali.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NoticesComponent } from './components/notices/notices.component';
import { AccountComponent } from './components/account/account.component';
import { BalanceComponent } from './components/balance/balance.component';
import { LoansComponent } from './components/loans/loans.component';
import { CardsComponent } from './components/cards/cards.component';

import { HomeComponent } from './components/home/home.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

/**
 * Funzione di inizializzazione per Keycloak.
 * Viene eseguita all'avvio dell'applicazione per configurare l'autenticazione.
 * 
 * @param keycloak Il servizio KeycloakService iniettato
 * @returns Una funzione che inizializza Keycloak con la configurazione specificata
 */
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://127.0.0.1:8180/', // URL del server Keycloak
        realm: 'eazybankdev',         // Realm configurato in Keycloak
        clientId: 'eazypublicclient', // Client ID per questa applicazione frontend
      },
      initOptions: {
        pkceMethod: 'S256',           // Metodo PKCE per sicurezza avanzata (Proof Key for Code Exchange)
        redirectUri: 'http://localhost:4200/dashboard', // URL di reindirizzamento dopo il login
      }, loadUserProfileAtStartUp: false // Non carica il profilo utente immediatamente all'avvio
    });
}

@NgModule({
  // Dichiara tutti i componenti che appartengono a questo modulo.
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    NoticesComponent,
    AccountComponent,
    BalanceComponent,
    LoansComponent,
    CardsComponent,
    HomeComponent,
  ],
  // Importa moduli necessari per il funzionamento dell'app.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Configura la protezione XSRF (Cross-Site Request Forgery)
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    KeycloakAngularModule,
  ],
  // Provider per servizi e configurazioni globali.
  providers: [
    {
      // APP_INITIALIZER è un token che permette di eseguire codice durante l'inizializzazione dell'app.
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak, // Usa la funzione definita sopra
      multi: true, // Permette più initializer
      deps: [KeycloakService], // Dipendenze richieste dalla factory
    },
  ],
  bootstrap: [AppComponent], // Componente da avviare al boot
})
export class AppModule { }
