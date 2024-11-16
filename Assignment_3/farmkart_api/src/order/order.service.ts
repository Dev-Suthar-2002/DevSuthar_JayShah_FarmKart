import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Mode } from 'node:fs';
import { Customer, CustomerDocument } from 'src/customer/customer.schema';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Customer.name) private customerModel : Model<CustomerDocument>,
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    ) { }

    async createOrder(createOrderDto : CreateOrderDto) : Promise<Order> {
        const { customer,products,paymentMethod,estimatedDeliveryDate,status,paymentStatus,transactionId, totalPrice } = createOrderDto;

        const newOrder = await new this.orderModel({
            customer : customer,
            products,
            totalPrice,
            paymentMethod,
            status,
            paymentStatus,
            transactionId,
            estimatedDeliveryDate,
        }).save();

        await this.customerModel.findByIdAndUpdate(
            customer,
            { $push: {orders: newOrder._id} },
            { new : true},
        );

        return newOrder;
    }

    async findAll(): Promise<Order[]> {
        return this.orderModel.find().populate('customer products.product').exec();
    }

    async findOne(id: string): Promise<Order> {
        const order = await this.orderModel.findById(id).populate('customer products.product').exec();
        if (!order) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        return order;
    }

    async updateOrder(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
        const updatedOrder = await this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true }).exec();
        if (!updatedOrder) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
        return updatedOrder;
    }

    async deleteOrder(id: string): Promise<void> {
        const result = await this.orderModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Order with ID ${id} not found`);
        }
    }
}
