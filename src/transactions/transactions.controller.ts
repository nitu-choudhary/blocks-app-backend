import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async createTransaction(@Res() response, @Body() createTransactionDto: CreateTransactionDto) {
    const { source, destination, amount, gasUsed, receiptHash } = createTransactionDto;
    if (!source || !destination || !amount) {
      return response.status(400).send({ message: 'Missing required fields' });
    }

    const gasFee = await this.transactionsService.calculateGasFee(gasUsed);
    const receiptHashValue = await this.transactionsService.generateReceiptHash();

    if (typeof gasFee === 'number') {
      createTransactionDto.gasUsed = gasFee;
    }
    if (typeof receiptHashValue !== 'void') {
      createTransactionDto.receiptHash = receiptHashValue;
    }

    return this.transactionsService.createTransaction(createTransactionDto);
  }
}
