import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './cart.schema';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Post()
    async create(@Body() createCartDto: CreateCartDto): Promise<Cart> {
        return this.cartService.createCart(createCartDto);
    }

    @Get()
    async findAll(): Promise<Cart[]> {
        return this.cartService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Cart> {
        return this.cartService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto): Promise<Cart> {
        return this.cartService.updateCart(id, updateCartDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Cart> {
        return this.cartService.deleteCart(id);
    }
}
