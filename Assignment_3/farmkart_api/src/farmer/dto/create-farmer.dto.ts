import { IsEmail, IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";

export class CreateFarmerDto {
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

    @IsOptional()
    @IsString()
    bio: string;
}