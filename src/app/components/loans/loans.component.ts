import { Component, OnInit } from '@angular/core';
import { Loans } from 'src/app/model/loans.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from '../../services/dashboard/dashboard.service';

/**
 * Componente per la visualizzazione dei prestiti (Loans).
 * Mostra l'elenco dei prestiti attivi e calcola il totale del debito residuo.
 */
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent implements OnInit {
  user = new User();
  loans = new Array();
  currOutstandingBalance: number = 0;

  constructor(private dashboardService: DashboardService) { }

  /**
   * Inizializzazione: recupera i dettagli dei prestiti e calcola il saldo totale dovuto.
   */
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails') || '');
    
    if (this.user) {
      this.dashboardService
        .getLoansDetails(this.user.email)
        .subscribe((responseData) => {
          this.loans = <any>responseData.body;
          
          // Itera sui prestiti per sommare l'outstandingAmount (debito residuo).
          this.loans.forEach(
            function (this: LoansComponent, loan: Loans) {
              this.currOutstandingBalance =
                this.currOutstandingBalance + loan.outstandingAmount;
            }.bind(this)
          );
        });
    }
  }
}
