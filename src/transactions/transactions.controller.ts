import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/send')
  async sendTransfer(@Res() response, @Body() createTransactionDto: CreateTransactionDto) {
    const { source, destination, amount, gasUsed, receiptHash } = createTransactionDto;

    this.transactionsService.createTransaction(createTransactionDto);

    return response.status(201).send({ message: 'Transaction created successfully', createTransactionDto });
  }

  @Get('/history')
  async getAllTransactions() {
    return this.transactionsService.getAllTransactions();
  }
}
