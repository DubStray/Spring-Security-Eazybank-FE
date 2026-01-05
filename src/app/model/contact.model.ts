/**
 * Modello per i messaggi di contatto o feedback.
 * Utilizzato nel form di contatto per inviare richieste al supporto o alla banca.
 */
export class Contact {
  /** ID univoco del messaggio di contatto */
  public contactId: string;
  /** Nome del mittente */
  public contactName: string;
  /** Indirizzo email del mittente per la risposta */
  public contactEmail: string;
  /** Oggetto del messaggio */
  public subject: string;
  /** Contenuto testuale del messaggio */
  public message: string;

  constructor(
    contactId?: string,
    contactName?: string,
    contactEmail?: string,
    subject?: string,
    message?: string
  ) {
    this.contactId = contactId || '';
    this.contactName = contactName || '';
    this.contactEmail = contactEmail || '';
    this.subject = subject || '';
    this.message = message || '';
  }
}
