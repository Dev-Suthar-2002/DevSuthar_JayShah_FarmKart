import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.schema';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.createProduct(createProductDto);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
        return this.productService.updateProduct(id, updateProductDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.productService.deleteProduct(id);
    }
}
