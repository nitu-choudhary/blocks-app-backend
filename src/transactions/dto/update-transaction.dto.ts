import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
    readonly source: string;
    readonly destination: string;
    readonly amount: number;
    readonly gasUsed: number;
    readonly receiptHash: string;
}
