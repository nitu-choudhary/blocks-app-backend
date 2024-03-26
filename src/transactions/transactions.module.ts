import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './schema/transaction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema }])
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
