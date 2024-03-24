import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from 'src/transactions/schema/transaction.schema';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/myappdb'),
        MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema }])
    ],
})
export class DatabaseModule {}

// Establishing the MongoDB connection