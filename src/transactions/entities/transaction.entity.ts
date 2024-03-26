export class Transaction {
    source: string;
    destination: string;
    amount: number;
    gasUsed: number;
    status: string;
    receiptHash: string;
    createdAt: Date;
    updatedAt: Date;
    transactionHash: string;
    blockHash: string;
    blockNumber: number;
}
