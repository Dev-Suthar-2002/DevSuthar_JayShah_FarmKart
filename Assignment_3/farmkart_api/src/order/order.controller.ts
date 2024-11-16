import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, Request} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './order.schema';
import { JwtAuthGuard } from 'src/auth/guard/auth.guard';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createOrderDto: CreateOrderDto, @Request() payload): Promise<Order> {
        const customer = payload.user._id;
        return this.orderService.createOrder({...createOrderDto,customer});
    }

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateOrderDto: Partial<CreateOrderDto>): Promise<Order> {
        return this.orderService.updateOrder(id, updateOrderDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.orderService.deleteOrder(id);
    }
}

