import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from "../../constants/app.constants";
import { environment } from '../../../environments/environment';
import { Contact } from '../../model/contact.model';

/**
 * Servizio Dashboard per la gestione delle operazioni bancarie dell'utente.
 * Fornisce metodi per recuperare dettagli conto, transazioni, prestiti, carte e comunicazioni.
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  /**
   * Recupera i dettagli del conto associato all'email specificata.
   * @param email Email dell'utente
   * @returns Observable con la risposta HTTP contenente i dettagli del conto
   */
  getAccountDetails(email: String) {
    return this.http.get(environment.rooturl + AppConstants.ACCOUNT_API_URL + "?email=" + email, { observe: 'response', withCredentials: true });
  }

  /**
   * Recupera la lista delle transazioni (bilancio) per l'utente.
   * @param email Email dell'utente
   * @returns Observable con la risposta HTTP contenente le transazioni
   */
  getAccountTransactions(email: String) {
    return this.http.get(environment.rooturl + AppConstants.BALANCE_API_URL + "?email=" + email, { observe: 'response', withCredentials: true });
  }

  /**
   * Recupera i dettagli dei prestiti attivi per l'utente.
   * @param email Email dell'utente
   * @returns Observable con la risposta HTTP contenente i dettagli dei prestiti
   */
  getLoansDetails(email: String) {
    return this.http.get(environment.rooturl + AppConstants.LOANS_API_URL + "?email=" + email, { observe: 'response', withCredentials: true });
  }

  /**
   * Recupera i dettagli delle carte (credito/debito) dell'utente.
   * @param email Email dell'utente
   * @returns Observable con la risposta HTTP contenente i dettagli delle carte
   */
  getCardsDetails(email: String) {
    return this.http.get(environment.rooturl + AppConstants.CARDS_API_URL + "?email=" + email, { observe: 'response', withCredentials: true });
  }

  /**
   * Recupera le comunicazioni o avvisi dalla banca (Notices).
   * @returns Observable con la risposta HTTP contenente la lista degli avvisi
   */
  getNoticeDetails() {
    return this.http.get(environment.rooturl + AppConstants.NOTICES_API_URL, { observe: 'response' });
  }

  /**
   * Invia un messaggio di contatto o richiesta di supporto al backend.
   * @param contact Oggetto Contact contenente i dettagli del messaggio
   * @returns Observable con la risposta HTTP dell'invio
   */
  saveMessage(contact: Contact) {
    var contacts = [];
    contacts.push(contact);
    return this.http.post(environment.rooturl + AppConstants.CONTACT_API_URL, contacts, { observe: 'response' });
  }

}