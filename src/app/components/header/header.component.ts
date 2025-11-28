// Barra di navigazione; mostra link in base allo stato di autenticazione salvato in sessione.
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit() {
    // Legge l’utente in cache per gestire il menu. Valuta uno stato auth osservabile.
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
  }
}
