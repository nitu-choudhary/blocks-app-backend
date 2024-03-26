import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose'; // Import the mongoose package
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './schema/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TransactionsService {
  
  generateReceiptHash() {
    // generate a random receipt hash value
    const crypto = require('crypto-js');
    return crypto.SHA256(Math.random().toString()).toString();
  
  }

  calculateGasUsed() {
    // calculate random gas used amount
    return Math.floor(Math.random() * 100);
  }

  constructor(@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>) {}

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    // assign the gasUsed and receiptHash values with random values
    createTransactionDto.gasUsed = await this.calculateGasUsed();
    createTransactionDto.receiptHash = await this.generateReceiptHash();

    // create a new transaction record and save it to the database
    const createdTransaction = new this.transactionModel(createTransactionDto);
    return createdTransaction.save();
  }

  // getTransactionHistory
  // return a list of transaction records retrieved from the database
  async getAllTransactions(): Promise<Transaction[]> {
    const transactionData = await this.transactionModel.find();
    if (!transactionData || transactionData.length == 0) {
        throw new NotFoundException('Transaction data not found!');
    }
    return transactionData;
  }
}