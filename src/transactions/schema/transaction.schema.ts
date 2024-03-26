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

    @Prop({ enum: ['FAILED', 'SUCCESS'], default: () => Math.random() < 0.5 ? 'FAILED' : 'SUCCESS' })
    status: string;

    @Prop()
    gasUsed: number;
    
    @Prop()
    receiptHash: string;

    @Prop({ default: Date.now })
    createdAt: Date;
    
    @Prop({ default: Date.now, type: Date })
    updatedAt: Date;

    @Prop()
    txnHash: string;

    @Prop()
    blockHash: string;

    @Prop()
    blockNumber: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);