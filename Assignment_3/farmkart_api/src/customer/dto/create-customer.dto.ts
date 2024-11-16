import { IsEmail, IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsOptional()
    @IsString()
    address: string;
}