import { IsNotEmpty, IsNumber, IsString, MaxLength, isNumber } from "class-validator";
import { defaultIfEmpty } from "rxjs";

export class CreateTransactionDto {
    @IsString()
    @IsNotEmpty()
    readonly source: string;

    @IsString()
    @IsNotEmpty()
    readonly destination: string;

    @IsNumber()
    @IsNotEmpty()
    readonly amount: number;

    @IsNumber() 
    gasUsed: number = 0; // Assign default value here which will be updated with a random value in the service
    
    status: string;

    // txn history
    receiptHash: string;
    createdAt: Date;
    updatedAt: Date;

    // receipt obj for transfers
    transactionHash: string;
    blockHash: string;
    blockNumber: number;
}