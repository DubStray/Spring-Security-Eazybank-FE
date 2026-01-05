import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from '../app/components/account/account.component';
import { BalanceComponent } from '../app/components/balance/balance.component';
import { NoticesComponent } from './components/notices/notices.component';
import { LoansComponent } from './components/loans/loans.component';
import { CardsComponent } from './components/cards/cards.component';
import { AuthKeyClockGuard } from './routeguards/auth.route';
import { HomeComponent } from './components/home/home.component';

/**
 * Definizione delle rotte dell'applicazione.
 * Le rotte associano URL specifici ai relativi componenti.
 * Alcune rotte sono protette da AuthKeyClockGuard per garantire che solo utenti autenticati e autorizzati possano accedervi.
 */
const routes: Routes = [
  // Rotta di default: reindirizza alla home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Rotte pubbliche accessibili a tutti
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'notices', component: NoticesComponent },
  // Rotte protette (richiedono autenticazione e ruolo specifico)
  {
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthKeyClockGuard], // Protegge la rotta
    data: {} 
  },
  {
    path: 'myAccount', 
    component: AccountComponent, 
    canActivate: [AuthKeyClockGuard], 
    data: {
      roles: ['USER'] // Richiede il ruolo 'USER'
    }
  },
  {
    path: 'myBalance', 
    component: BalanceComponent, 
    canActivate: [AuthKeyClockGuard], 
    data: {
      roles: ['USER', 'ADMIN'] // Richiede ruolo 'USER' o 'ADMIN'
    }
  },
  {
    path: 'myLoans', 
    component: LoansComponent, 
    canActivate: [AuthKeyClockGuard], 
    data: {}
  },
  {
    path: 'myCards', 
    component: CardsComponent, 
    canActivate: [AuthKeyClockGuard], 
    data: {
      roles: ['USER']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }