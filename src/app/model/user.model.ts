/**
 * Modello Utente completo per la gestione del profilo e dell'autenticazione.
 * Contiene sia i dati anagrafici che le informazioni di stato e ruolo.
 */
export class User {
  /** ID univoco dell'utente */
  public id: number;
  /** Nome completo dell'utente */
  public name: string;
  /** Numero di cellulare */
  public mobileNumber: string;
  /** Indirizzo email */
  public email: string;
  /** Password (in chiaro o hash, dipendentemente dal contesto, ma solitamente non esposta qui in frontend per sicurezza se non necessario) */
  public password: string;
  /** Ruolo dell'utente nell'applicazione (es. USER, ADMIN) */
  public role: string;
  /** Codice di stato dell'utente (es. attivo, bloccato) */
  public statusCd: string;
  /** Messaggio descrittivo dello stato (opzionale) */
  public statusMsg: string;
  /** Stato dell'autenticazione (es. successo, fallito) */
  public authStatus: string;

  constructor(
    id?: number,
    name?: string,
    mobileNumber?: string,
    email?: string,
    password?: string,
    role?: string,
    statusCd?: string,
    statusMsg?: string,
    authStatus?: string
  ) {
    this.id = id || 0;
    this.name = name || '';
    this.mobileNumber = mobileNumber || '';
    this.email = email || '';
    this.password = password || '';
    this.role = role || '';
    this.statusCd = statusCd || '';
    this.statusMsg = statusMsg || '';
    this.authStatus = authStatus || '';
  }
}
