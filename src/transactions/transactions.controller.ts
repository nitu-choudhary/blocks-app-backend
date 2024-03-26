import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/send')
  async sendTransfer(@Res() response, @Body() createTransactionDto: CreateTransactionDto) {
    const { source, destination, amount, gasUsed, receiptHash } = createTransactionDto;

    // validation checks
    if (!source || !destination || !amount) {
      return response.status(400).send({ message: 'Missing required fields' });
    }
    if (amount <= 0) {
      return response.status(400).send({ message: 'Amount must be greater than 0' });
    }

    this.transactionsService.createTransaction(createTransactionDto);

    return response.status(201).send({ message: 'Transaction created successfully' });
  }

  @Get('/history')
  async getAllTransactions() {
    
    return this.transactionsService.getAllTransactions();
    // return this.transactionsService.getAllTransactions().then((transactions) => {
    //   return transactions.map(({ source, destination, amount, status }) => ({ source, destination, amount, status }));
    // });
    // front - end should use only source, destination, amount and status to display from the transaction history
  }
}
