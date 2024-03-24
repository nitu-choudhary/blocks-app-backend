import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

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

    gasUsed: number;
    receiptHash: string;
}