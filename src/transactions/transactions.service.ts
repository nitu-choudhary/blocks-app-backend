import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './schema/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';
import { generateRandomHash, generateRandomNumber } from 'src/helper/helper';

@Injectable()
export class TransactionsService {
  constructor(@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>) {}

  // create a new transaction record and save it to the database when a transfer is made
  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {

    // assign the gasUsed and receiptHash values with random values using the helper functions
    createTransactionDto.gasUsed = generateRandomNumber();
    createTransactionDto.receiptHash = generateRandomHash();

    // assign random hash values for fields in the recipt
    createTransactionDto.transactionHash = generateRandomHash();
    createTransactionDto.blockHash = generateRandomHash();
    createTransactionDto.blockNumber = generateRandomNumber(); // Generate a random number using faker

    // create a new transaction record and save it to the database
    const createdTransaction = new this.transactionModel(createTransactionDto);

    return createdTransaction.save();
  }

  // get transactions history
  async getAllTransactions(): Promise<Transaction[]> {
    const transactionData = await this.transactionModel.find();
    if (!transactionData || transactionData.length == 0) {
        throw new NotFoundException('Transaction data not found!');
    }
    return transactionData;
  }
}