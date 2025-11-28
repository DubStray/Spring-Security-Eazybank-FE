// Pagina profilo account; recupera i dati dell’account autenticato in init.
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { User } from 'src/app/model/user.model';
import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  user = new User();
  account = new Account();
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // Carica i dettagli account dell’utente corrente; valuta gestione errori/stato di loading.
    this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    if (this.user) {
      this.dashboardService
        .getAccountDetails(this.user.id)
        .subscribe((responseData) => {
          this.account = <any>responseData.body;
        });
    }
  }
}
