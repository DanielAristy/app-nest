import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerController } from './controllers/customer/customer.controller';

@Module({
  imports: [CustomerModule, InvoiceModule],
  controllers: [AppController, CustomerController],
  providers: [AppService],
})
export class AppModule {}
