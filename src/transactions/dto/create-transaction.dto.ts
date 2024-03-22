export class CreateTransactionDto {
    readonly source: string;
    readonly destination: string;
    readonly amount: number;
    readonly gasUsed: number;
    readonly receiptHash: string;
}
