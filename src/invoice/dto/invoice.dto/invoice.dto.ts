import { InvoiceDetailDto } from '../invoice-detail.dto/invoice-detail.dto';
import { Type } from 'class-transformer';
import {
    IsArray,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    ValidateNested,
  } from 'class-validator';
import { v4 as uuid } from 'uuid';
   
export class InvoiceDto {
    @IsUUID()
    @IsOptional()
    readonly id?: string = uuid();
    @IsUUID()
    @IsOptional()
    readonly customerId?: string = uuid();
    @IsString()
    @IsNotEmpty()
    readonly nit: string;
    @IsArray()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => InvoiceDetailDto)
    products: InvoiceDetailDto[];
}
