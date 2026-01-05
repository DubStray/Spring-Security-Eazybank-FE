import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { User } from 'src/app/model/user.model';
import { Account } from 'src/app/model/account.model';

/**
 * Componente per la visualizzazione dei dettagli del conto (Account).
 * Recupera e mostra le informazioni del conto associato all'utente autenticato.
 */
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  user = new User();
  account = new Account();

  constructor(private dashboardService: DashboardService) { }

  /**
   * Metodo di inizializzazione del componente.
   * Recupera l'utente dalla sessione e invoca il servizio per ottenere i dettagli del conto.
   */
  ngOnInit(): void {
    // Recupera i dati utente salvati nel sessionStorage durante il login.
    this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    
    // Se l'utente è presente, effettua la chiamata al backend.
    if (this.user) {
      this.dashboardService
        .getAccountDetails(this.user.email)
        .subscribe((responseData) => {
          // Assegna la risposta al modello 'account' per il binding nel template.
          this.account = <any>responseData.body;
        });
    }
  }
}
