/**
 * Gateway di autenticazione: gestisce le chiamate al backend per il login e la gestione della sessione utente.
 * Incapsula la logica di comunicazione HTTP relativa all'utente.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { AppConstants } from 'src/app/constants/app.constants';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  /**
   * Invia le credenziali o i dettagli dell'utente al backend per la validazione.
   * Salva inoltre i dettagli dell'utente nel sessionStorage per mantenere lo stato della sessione.
   * 
   * @param user Oggetto User contenente le informazioni di login
   * @returns Observable con la risposta HTTP del login
   */
  validateLoginDetails(user: User) {
    // Salva i dettagli utente nel session storage.
    // Nota: In un'architettura più complessa, questo potrebbe essere spostato in un AuthService dedicato.
    window.sessionStorage.setItem('userdetails', JSON.stringify(user));
    return this.http.get(environment.rooturl + AppConstants.LOGIN_API_URL, {
      observe: 'response',
      withCredentials: true,
    });
  }
}
