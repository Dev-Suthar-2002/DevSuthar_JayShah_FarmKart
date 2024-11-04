import { Controller, Get, Post, Body, Param, Patch, Delete  } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './order.schema';

@Controller('order')  
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.createOrder(createOrderDto);
    }

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateOrderDto: Partial<CreateOrderDto>): Promise<Order> {
        return this.orderService.updateOrder(id, updateOrderDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.orderService.deleteOrder(id);
    }
}

