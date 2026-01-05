/**
 * Modello che rappresenta una singola transazione bancaria.
 * Utilizzato per popolare la cronologia dei movimenti nell'interfaccia utente.
 */
export class AccountTransactions {
  /** Numero del conto associato alla transazione */
  public accountNumber: number;
  /** ID del cliente */
  public customerId: number;
  /** Data in cui la transazione è stata effettuata */
  public transactionDt: Date;
  /** Descrizione o causale della transazione */
  public transactionSummary: string;
  /** Tipo di transazione (es. Deposito, Prelievo) */
  public transactionType: string;
  /** Importo della transazione */
  public transactionAmt: number;
  /** Saldo finale dopo la transazione */
  public closingBalance: number;

  constructor(
    accountNumber?: number,
    customerId?: number,
    transactionDt?: Date,
    transactionSummary?: string,
    transactionType?: string,
    transactionAmt?: number,
    closingBalance?: number
  ) {
    this.accountNumber = accountNumber || 0;
    this.customerId = customerId || 0;
    this.transactionDt = transactionDt!;
    this.transactionSummary = transactionSummary || '';
    this.transactionType = transactionType || '';
    this.transactionAmt = transactionAmt || 0;
    this.closingBalance = closingBalance || 0;
  }
}
