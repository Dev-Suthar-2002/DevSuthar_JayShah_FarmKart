import { IsEnum, IsNotEmpty, IsNumber, IsString, IsArray, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PaymentMethod, OrderStatus, PaymentStatus } from "../order.schema";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsNumber()
    totalPrice: number;

    //add products when you create product schema

    @IsNotEmpty()
    estimatedDeliveryDate: Date;

    @IsEnum(PaymentMethod)
    paymentMethod: PaymentMethod;

    @IsNotEmpty()
    @IsString()
    customer: string; //customer ID should go here

    @IsArray()
    @IsNotEmpty({ each: true }) 
    products: {
        productId: string; 
        quantity: number; 
        farmer: string; 
    }[]; 

    @IsEnum(OrderStatus)
    status: OrderStatus; // Order status

    @IsEnum(PaymentStatus)
    paymentStatus: PaymentStatus; // Payment status

    @IsOptional() // Optional because it might be assigned after payment processing
    @IsString()
    transactionId?: string; 

}