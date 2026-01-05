import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

/**
 * Componente di Logout.
 * Gestisce la disconnessione dell'utente, pulendo la sessione locale
 * e reindirizzando alla pagina di login o home.
 */
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  user = new User();
  constructor(private router: Router) {}

  /**
   * All'inizializzazione, pulisce le informazioni sensibili dal sessionStorage.
   */
  ngOnInit(): void {
    window.sessionStorage.setItem('userdetails', '');
    window.sessionStorage.setItem('Authorization', '');
    // window.sessionStorage.setItem('XSRF-TOKEN', ''); // Opzionale: pulire anche XSRF token se necessario
    
    // Reindirizza l'utente alla pagina di login.
    this.router.navigate(['/login']);
  }
}
