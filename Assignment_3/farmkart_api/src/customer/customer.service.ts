import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer,CustomerDocument } from './customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {

    constructor(
        @InjectModel(Customer.name) private customerModel : Model<CustomerDocument>,
    ){}

    async createCustomer(createCustomerDto : CreateCustomerDto) : Promise<Customer> {
        const createdCustomer = new this.customerModel(createCustomerDto);
        return createdCustomer.save()
    }

    async findAll() : Promise<Customer[]> {
        return this.customerModel.find().populate('orders').exec();
    }

    async findOne(id:string) : Promise<Customer> {
        const customer = await this.customerModel.findById(id).populate('orders').exec();

        if(!customer) {
            throw new NotFoundException(`customer with ID ${id} not found`);
        }

        return customer;
    }

    async updateCustomer(id:string, updateCustomerDto: UpdateCustomerDto) : Promise<Customer> {
        const updatedCustomer = await this.customerModel.findByIdAndUpdate(id, updateCustomerDto, { new:true }).exec();
        if(!updatedCustomer) {
            throw new NotFoundException(`customer with ID ${id} not found`);
        }

        return updatedCustomer;
    }

    async deleteCustomer(id:string) : Promise<void> {
        const result = await this.customerModel.findByIdAndDelete(id).exec();
        if(!result) {
            throw new NotFoundException(`customer with Id ${id} not found`);
        }
    }


}
