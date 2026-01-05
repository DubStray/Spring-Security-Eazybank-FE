/**
 * Componente principale (Root Component) dell'applicazione.
 * Funge da contenitore (shell) per l'intera interfaccia utente.
 * Contiene il tag <router-outlet> nel suo template per gestire la navigazione.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Titolo dell'applicazione, utilizzato principalmente per scopi di debug o visualizzazione nel template.
  title = 'bank-app-ui';
}
