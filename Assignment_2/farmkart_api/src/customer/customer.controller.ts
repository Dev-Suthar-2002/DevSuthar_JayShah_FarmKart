import { Controller,Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './customer.schema';

@Controller('customer')
export class CustomerController {
    constructor( private readonly customerService : CustomerService) {}

    @Post()
    async create(@Body() createCustomerDto : CreateCustomerDto): Promise<Customer> {
        return this.customerService.createCustomer(createCustomerDto);
    }

    @Get()
    async findAll(): Promise<Customer[]> {
        return this.customerService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Customer> {
        return this.customerService.findOne(id);
    }

    @Patch(':id')
    async update(
            @Param('id') id: string, 
            @Body() updateCustomerDto : UpdateCustomerDto,
        ) : Promise<Customer> {
            return this.customerService.updateCustomer(id, updateCustomerDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.customerService.deleteCustomer(id);
    }
}
