import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/model/cards.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from '../../services/dashboard/dashboard.service';

/**
 * Componente per la gestione delle carte di pagamento.
 * Visualizza le carte associate all'utente e calcola l'importo totale disponibile/utilizzato.
 */
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  user = new User();
  cards = new Array();
  currOutstandingAmt: number = 0;

  constructor(private dashboardService: DashboardService) { }

  /**
   * Inizializzazione: carica le carte e calcola i totali.
   */
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails') || '');
    
    if (this.user) {
      this.dashboardService
        .getCardsDetails(this.user.email)
        .subscribe((responseData) => {
          this.cards = <any>responseData.body;
          
          // Itera su tutte le carte per calcolare l'importo totale disponibile.
          this.cards.forEach(
            function (this: CardsComponent, card: Cards) {
              this.currOutstandingAmt =
                this.currOutstandingAmt + card.availableAmount;
            }.bind(this)
          );
        });
    }
  }
}
