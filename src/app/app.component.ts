// Componente shell root; ospita il router e i provider globali.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Titolo descrittivo utile per debug/analytics.
  title = 'bank-app-ui';
}
