import { ICustomer } from '../../interface/Icustomer.interface';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { v4 as uuid } from 'uuid';

export class CustomerDto implements ICustomer {
    @IsUUID()
    @IsOptional()
    id?: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    lastname: string;
    @IsString()
    @IsNotEmpty()
    phone: string;
    @IsNotEmpty()
    age: number;

    constructor(customer?: ICustomer){
        this.id = customer?.id ?? uuid();
        this.name = customer?.name ?? '';
        if (customer?.lastname) this.lastname = customer?.lastname;
        this.phone = customer?.phone ?? '';
        this.age = customer?.age ?? 0;
    }
}
