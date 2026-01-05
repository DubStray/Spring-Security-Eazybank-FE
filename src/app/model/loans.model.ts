/**
 * Modello che rappresenta un prestito bancario attivo.
 * Contiene i dettagli sull'importo prestato e lo stato dei pagamenti.
 */
export class Loans {
  /** Numero identificativo del prestito */
  public loanNumber: number;
  /** ID del cliente intestatario del prestito */
  public customerId: number;
  /** Data di inizio del prestito */
  public startDt: Date;
  /** Tipo di prestito (es. Mutuo, Prestito personale, Auto) */
  public loanType: string;
  /** Importo totale concesso in prestito */
  public totalLoan: number;
  /** Importo già rimborsato */
  public amountPaid: number;
  /** Importo residuo da pagare */
  public outstandingAmount: number;

  constructor(
    loanNumber?: number,
    customerId?: number,
    startDt?: Date,
    loanType?: string,
    totalLoan?: number,
    amountPaid?: number,
    outstandingAmount?: number
  ) {
    this.loanNumber = loanNumber || 0;
    this.customerId = customerId || 0;
    this.startDt = startDt!;
    this.loanType = loanType || '';
    this.totalLoan = totalLoan || 0;
    this.amountPaid = amountPaid || 0;
    this.outstandingAmount = outstandingAmount || 0;
  }
}
