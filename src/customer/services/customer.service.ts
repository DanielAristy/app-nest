import { Injectable, NotFoundException } from '@nestjs/common';
import { ICustomer } from '../interface/Icustomer.interface';
import { v4 as uuid } from 'uuid';
import { CustomerDto } from '../dto/customer.dto/customer.dto';

@Injectable()
export class CustomerService {
    private customers: ICustomer[] = [
        {
            id: uuid(),
            name: 'Daniel',
            lastname: 'Lopez',
            phone: '3114567890',
            age: 25
        },
        {
            id: uuid(),
            name: 'Jorge',
            lastname: 'Perez',
            phone: '3014567899',
            age: 26
        },
        {
            id: uuid(),
            name: 'Jeronimo',
            lastname: 'Henao',
            phone: '3124567848',
            age: 27
        },
    ];

    findAll(): ICustomer[] {
        return this.customers;
    }

    findById(id: string) {
        const customer = this.customers.find(customer => customer?.id === id)
        if (!customer) {
         throw new NotFoundException(`No existe usuario con uuid: ${id.toString()}`)
        }
        return customer
    } 

    createUser(customer: CustomerDto){
        const newCustomer = {
          id: uuid(),
          ...customer
        }
        this.customers.push(newCustomer);
        return newCustomer;
    }
    
    updateUser(id: string, userDto: CustomerDto){
      const updateCustomer = this.findById(id);
      if (updateCustomer) {
        const index = this.customers.findIndex((customerData) => id.includes(customerData.id));
        this.customers[index] = {... updateCustomer, ...userDto};
        return this.customers[index];
      }
    }
    
    modifyUser(id: string, customerDto: CustomerDto){
      return this.updateUser(id, customerDto)
    }
    
    deleteUser(id: string): boolean {
      const index = this.customers.findIndex((customer) => id.includes(customer.id));
      if (index == -1) {
        throw new NotFoundException(`No pudo encontrarse el cliente con id: ${id}`)
      }
      this.customers.splice(index, 1)
      return true;
    }
}

