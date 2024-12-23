import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer, CustomerDocument } from './customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CustomerService {

    constructor(
        @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
    ) { }

    async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        const existingCustomer = await this.customerModel.findOne({ email: createCustomerDto.email }).exec();
        if (existingCustomer) {
            throw new ConflictException(`Customer with email ${createCustomerDto.email} already exists`);
        }

        const hashedPassword = await bcrypt.hash(createCustomerDto.password, 10);
        
        const createdCustomer = new this.customerModel({ ...createCustomerDto, password: hashedPassword });
        return createdCustomer.save();
    }

    async findAll(): Promise<Customer[]> {
        return this.customerModel.find().populate('orders').exec();
    }

    async findOne(id: string): Promise<Customer> {
        const customer = await this.customerModel.findById(id).populate('orders').exec();

        if (!customer) {
            throw new NotFoundException(`customer with ID ${id} not found`);
        }

        return customer;
    }

    async findOneByEmail(email: string): Promise<Customer> {
        const customer = await this.customerModel.findOne({ email }).exec();
        if (!customer) {
            throw new NotFoundException(`Customer with email ${email} not found`);
        }
        return customer;
    }

    async updateCustomer(id: string, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
        const hashedPassword = await bcrypt.hash(updateCustomerDto.password, 10);
        const updatedCustomer = await this.customerModel.findByIdAndUpdate(id, { ...updateCustomerDto, password: hashedPassword }, { new: true }).exec();
        if (!updatedCustomer) {
            throw new NotFoundException(`customer with ID ${id} not found`);
        }

        return updatedCustomer;
    }

    async deleteCustomer(id: string): Promise<void> {
        const result = await this.customerModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`customer with Id ${id} not found`);
        }
    }


}
