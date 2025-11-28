// Gateway di autenticazione: incapsula le chiamate API e l’avvio della sessione.
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

  // Invia le credenziali al backend e salva l’utente grezzo in session storage.
  // Suggerimento: sposta le scritture di sessione in un AuthService per centralizzare gli effetti collaterali.
  validateLoginDetails(user: User) {
    window.sessionStorage.setItem('userdetails', JSON.stringify(user));
    return this.http.get(environment.rooturl + AppConstants.LOGIN_API_URL, {
      observe: 'response',
      withCredentials: true,
    });
  }
}
