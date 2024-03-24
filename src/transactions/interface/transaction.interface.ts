import { Document } from "mongoose";

export interface Transaction extends Document {
    source: string;
    destination: string;
    amount: number;
    gasUsed: number;
    receiptHash: string;
}