import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

/**
 * Componente Dashboard principale.
 * Funge da pagina di atterraggio (Landing Page) per l'utente autenticato,
 * mostrando un riepilogo o il benvenuto con il nome dell'utente.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit() {
    // Verifica se esistono dettagli utente in sessione e li carica per visualizzare il nome.
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || '');
    }
  }
}
