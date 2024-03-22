import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlocksModule } from './blocks/blocks.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [BlocksModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}