// Layer di accesso dati per gli endpoint del dashboard; mantiene i componenti snelli.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../../constants/app.constants';
import { environment } from '../../../environments/environment';
import { Contact } from '../../model/contact.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  // Recupera le info principali dell’account dell’utente autenticato.
  getAccountDetails(id: number) {
    return this.http.get(
      environment.rooturl + AppConstants.ACCOUNT_API_URL + '?id=' + id,
      { observe: 'response', withCredentials: true }
    );
  }

  // Scarica la cronologia delle transazioni; valuta paginazione su liste grandi.
  getAccountTransactions(id: number) {
    return this.http.get(
      environment.rooturl + AppConstants.BALANCE_API_URL + '?id=' + id,
      { observe: 'response', withCredentials: true }
    );
  }

  // Riepilogo prestiti per le card del dashboard.
  getLoansDetails(id: number) {
    return this.http.get(
      environment.rooturl + AppConstants.LOANS_API_URL + '?id=' + id,
      { observe: 'response', withCredentials: true }
    );
  }

  // Riepilogo carte di credito per le card del dashboard.
  getCardsDetails(id: number) {
    return this.http.get(
      environment.rooturl + AppConstants.CARDS_API_URL + '?id=' + id,
      { observe: 'response', withCredentials: true }
    );
  }

  // Gli avvisi sono pubblici, quindi niente credenziali.
  getNoticeDetails() {
    return this.http.get(environment.rooturl + AppConstants.NOTICES_API_URL, {
      observe: 'response',
    });
  }

  // Invia i messaggi di contatto; ritorna il record creato con id generato.
  saveMessage(contact: Contact) {
    var contacts = [];
    contacts.push(contact);
    return this.http.post(
      environment.rooturl + AppConstants.CONTACT_API_URL,
      contacts,
      { observe: 'response', withCredentials: true }
    );
  }
}
