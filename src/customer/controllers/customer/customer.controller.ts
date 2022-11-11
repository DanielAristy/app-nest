import { Body, Controller, Delete, Get, Param, Patch, Post, Put, ValidationPipe } from '@nestjs/common';
import { CustomerService } from '../../services/customer.service';
import { CustomerDto } from '../../dto/customer.dto/customer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}

  @Get()
  getAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
    findById(@Param('id') id: string){
    return this.customerService.findById(id)
  }

  @Post()
  createUser(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    customerDto: CustomerDto,
  ): CustomerDto {
    return this.customerService.createUser(customerDto);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    customerDto: CustomerDto,
  ) {
    return this.customerService.updateUser(id, customerDto)
  }

  @Patch(':id')
  modifyUser(@Param('id') id: string,
  @Body(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  customerDto: CustomerDto,) {
    return this.customerService.modifyUser(id, customerDto);
  }


  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.customerService.deleteUser(id)
  }
}
