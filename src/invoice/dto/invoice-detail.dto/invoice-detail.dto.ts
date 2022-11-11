import { InvoiceDetail } from './../../interface/invoice-detail.interface';
import { IsNotEmpty, IsNumber, IsString, MinLength, IsUUID, IsOptional } from 'class-validator';
import { v4 as uuid } from 'uuid';
export class InvoiceDetailDto implements InvoiceDetail {
    @IsUUID()
    @IsOptional()
    readonly id?: string = uuid();
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    readonly name: string;
  
    @IsNumber()
    readonly price: number;
  
    @IsNumber()
    readonly quantity: number;
}
