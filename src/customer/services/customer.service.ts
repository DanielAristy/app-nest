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
        let updateCustomer = this.findById(id);
        this.customers = this.customers.map(user => {
          if (id.includes(user?.id ?? '')) {
            updateCustomer = {...updateCustomer, ...userDto, id };
            return updateCustomer;
          }
          return user;
        })
        return updateCustomer;
      }
    
      modifyUser(id: string, customerDto: CustomerDto){
        return this.updateUser(id, customerDto)
      }
    
      deleteUser(id: string): boolean { 
        const customer = this.findById(id);
        let valid = false;
        if (customer) {
          this.customers.forEach((customerData, i) => {
            if (customer?.id === customerData?.id) {
              this.customers.splice(i, 1)
              valid = true;
            }
          })
        } else valid = false;
    
        return valid;
      }
}
