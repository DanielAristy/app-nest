import {Controller, Param, Get, Post, Body, Delete,} from '@nestjs/common';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceDto } from '../../dto/invoice.dto/invoice.dto';

@Controller('invoice')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService){}

    @Get()
    getAll(){
        return this.invoiceService.getAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.invoiceService.findById(id);
    }

    @Post()
    createInvoice(@Body() invoiceDto: InvoiceDto) {
        return this.invoiceService.createInvoice(invoiceDto);
    }

    @Delete(':id')
    deleteInvoice(@Param('id') id:string ) {
        return this.invoiceService.deleteInvoice(id);
    }
}
