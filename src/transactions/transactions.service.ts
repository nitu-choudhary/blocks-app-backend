import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose'; // Import the mongoose package
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './schema/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TransactionsService {
  
  generateReceiptHash() {
    throw new Error('Method not implemented.');
  }

  calculateGasFee(gasUsed: number) {
    // calculate gas fess randpmly 
    return Math.floor(Math.random() * 100);
  }

  getWalletBalance(source: string) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>) {}

  async createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const createdTransaction = new this.transactionModel(createTransactionDto);
    return createdTransaction.save();
  }

  // getTransactionHistory
  // returns a list of transaction records retrieved from the database
  async getAllTransactions(): Promise<Transaction[]> {
    const transactionData = await this.transactionModel.find();
    if (!transactionData || transactionData.length == 0) {
        throw new NotFoundException('Transaction data not found!');
    }
    return transactionData;
  }
}