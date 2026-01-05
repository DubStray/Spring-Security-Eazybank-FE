/**
 * Modello che rappresenta una carta di credito o debito.
 * Contiene informazioni su limiti, utilizzo e disponibilità.
 */
export class Cards {
  /** Numero identificativo della carta (in formato stringa per preservare eventuali zeri iniziali o formattazione) */
  public cardNumber: string;
  /** ID del cliente intestatario */
  public customerId: number;
  /** Tipo di carta (es. Credito, Debito, Prepagata) */
  public cardType: string;
  /** Limite totale di spesa della carta */
  public totalLimit: number;
  /** Importo attualmente utilizzato */
  public amountUsed: number;
  /** Importo ancora disponibile per la spesa */
  public availableAmount: number;

  constructor(
    cardNumber?: string,
    customerId?: number,
    cardType?: string,
    totalLimit?: number,
    amountUsed?: number,
    availableAmount?: number
  ) {
    this.cardNumber = cardNumber || '';
    this.customerId = customerId || 0;
    this.cardType = cardType || '';
    this.totalLimit = totalLimit || 0;
    this.amountUsed = amountUsed || 0;
    this.availableAmount = availableAmount || 0;
  }
}
