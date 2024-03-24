import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import exp from 'constants';

@Schema()
export class Transaction {
    @Prop()
    source: string;

    @Prop()
    destination: string;

    @Prop()
    amount: number;

    @Prop()
    gasUsed: number;

    @Prop()
    receiptHash: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);