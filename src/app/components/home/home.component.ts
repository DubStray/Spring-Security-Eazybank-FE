import { Component, OnInit } from '@angular/core';

/**
 * Componente Home (Landing Page pubblica).
 * Visualizza il contenuto statico principale accessibile a tutti gli utenti (anche non autenticati).
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
