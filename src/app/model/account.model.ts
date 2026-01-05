/**
 * Modello DTO (Data Transfer Object) per i dettagli del conto corrente.
 * Rappresenta le informazioni principali di un conto bancario come restituite dalle API.
 */
export class Account {
  /** ID univoco del cliente a cui appartiene il conto */
  public customerId: number;
  /** Numero del conto corrente */
  public accountNumber: number;
  /** Tipo di conto (es. Risparmio, Corrente) */
  public accountType: string;
  /** Indirizzo della filiale dove è radicato il conto */
  public branchAddress: string;

  constructor(
    customerId?: number,
    accountNumber?: number,
    accountType?: string,
    branchAddress?: string
  ) {
    this.customerId = customerId || 0;
    this.accountNumber = accountNumber || 0;
    this.accountType = accountType || '';
    this.branchAddress = branchAddress || '';
  }
}
