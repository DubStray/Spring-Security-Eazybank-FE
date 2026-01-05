import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { DashboardService } from '../../services/dashboard/dashboard.service';

/**
 * Componente per la visualizzazione del saldo e della cronologia transazioni.
 * Mostra l'elenco dei movimenti bancari dell'utente.
 */
@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  user = new User();
  transactions = new Array();

  constructor(private dashboardService: DashboardService) { }

  /**
   * Inizializzazione: recupera le transazioni dell'utente corrente.
   */
  ngOnInit(): void {
    // Recupera l'utente dalla sessione locale.
    this.user = JSON.parse(sessionStorage.getItem('userdetails') || '');
    
    if (this.user) {
      // Chiama il servizio Dashboard per ottenere la lista delle transazioni.
      this.dashboardService
        .getAccountTransactions(this.user.email)
        .subscribe((responseData) => {
          this.transactions = <any>responseData.body;
        });
    }
  }
}
