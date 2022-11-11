import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Invoice } from '../interface/invoice.interface';
import { InvoiceDto } from '../dto/invoice.dto/invoice.dto';

@Injectable()
export class InvoiceService {
    private invoices: Invoice[] = [
        {
            id: uuid(),
            customerId: uuid(),
            nit: '34567890',
            products: [
              {
                id: uuid(),
                name: 'Leche Colanta',
                price: 3000,
                quantity: 6,
              },
            ],
        },
        {
            id: uuid(),
            customerId: uuid(),
            nit: '45689032',
            products: [
              {
                id: uuid(),
                name: 'Nestcafe',
                price: 15000,
                quantity: 6,
              },
              {
                id: uuid(),
                name: 'Papas',
                price: 7000,
                quantity: 6,
              },
            ],
        },
        {
            id: uuid(),
            customerId: uuid(),
            nit: '9087612233',
            products: [
              {
                id: uuid(),
                name: 'CocaCola',
                price: 2000,
                quantity: 6,
              },
              {
                id: uuid(),
                name: 'Pepsi',
                price: 1900,
                quantity: 6,
              },
            ],
        },
    ]
    
    getAll(){
        return this.invoices;
    }

    findById(id: string){
        const invoice = this.invoices.find((invoice) => invoice.id === id);
    if (!invoice)
      throw new NotFoundException(`No pudo encontrarse la factura con id: ${id}`);
    return invoice;
    }

    createInvoice(invoiceDto: InvoiceDto) {
        const invoice: Invoice = {
            id: uuid(),
            customerId: uuid(),
            ...invoiceDto,
          };
          this.invoices.push(invoice);
          return invoice;
    }

    updateInvoice(id: string, invoiceDto: InvoiceDto) {
      const invoice = this.findById(id);
      if (invoice) {
        const index = this.invoices.findIndex((invoiceData) => id.includes(invoiceData.id));
        this.invoices[index] = {...invoice, ...invoiceDto};
        return this.invoices[index]
      }
    }

    deleteInvoice(id: string): boolean {
      const index = this.invoices.findIndex((invoice) => id.includes(invoice.id));
      if (index == -1) {
        throw new NotFoundException(`No pudo encontrarse la factura con id: ${id}`)
      }
      this.invoices.splice(index, 1)
      return true;
    }
}
