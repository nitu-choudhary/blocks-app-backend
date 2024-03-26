import { Document } from "mongoose";

export interface Transaction extends Document {
    source: string;
    destination: string;
    amount: number;
    gasUsed: number;
    receiptHash: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    txnHash: string;
    blockHash: string;
    blockNumber: number;
}