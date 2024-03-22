import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose'; // Import the mongoose package
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  // create a mongodb connection to store transactions using mongoose
  private db = mongoose.connection;
  
  // create a schema for transactions
  private Schema = mongoose.Schema;
  private transactionSchema = new this.Schema({
    source: String,
    destination: String,
    amount: Number,
    gasUsed: Number,
    receiptHash: String
  });
  private Transaction = mongoose.model('Transaction', this.transactionSchema);

  // Connect to the database
  constructor() {
    mongoose.connect('mongodb://localhost:27017/transactions', {useNewUrlParser: true, useUnifiedTopology: true});
    this.db.on('error', console.error.bind(console, 'connection error:'));
    this.db.once('open', function() {
      console.log('Connected to the database');
    });
  }

  // createTransaction
  create(createTransactionDto: CreateTransactionDto) {
    return 'This action adds a new transaction';
  }

  // getTransactionHistory
  // returns a list of transaction records retrieved from the database
  // for now lets start with a simple list of transactions before using a db
  findAll() {
    return "return transactions";
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
