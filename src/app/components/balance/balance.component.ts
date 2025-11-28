// Vista del saldo: mostra l’ultimo saldo finale e la cronologia movimenti.
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  user = new User();
  transactions = new Array();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // Recupera le transazioni dell’utente loggato; il server dovrebbe già imporre l’autenticazione.
    this.user = JSON.parse(sessionStorage.getItem('userdetails') || '');
    if (this.user) {
      this.dashboardService
        .getAccountTransactions(this.user.id)
        .subscribe((responseData) => {
          this.transactions = <any>responseData.body;
        });
    }
  }
}
