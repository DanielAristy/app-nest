import { Module} from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AppService } from './main/app.service';
import { AppController } from './main/app.controller';

@Module({
  imports: [CustomerModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
