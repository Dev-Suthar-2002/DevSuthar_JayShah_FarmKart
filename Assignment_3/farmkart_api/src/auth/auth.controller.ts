import { Controller, Post, Body, UseGuards, HttpCode, HttpStatus, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/auth.guard';
import { IsEmail, IsString, IsEnum } from 'class-validator';
import { Request } from 'express';
import { Role } from './role.enum';


export class LoginDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsEnum([Role.FARMER, Role.CUSTOMER])
    role: Role.FARMER | Role.CUSTOMER;
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto.email, loginDto.password, loginDto.role);
    }

    @UseGuards(JwtAuthGuard)
    @Get('protected')
    async getHello(@Body() loginDto: Record<string, any>) {
        return loginDto.email;
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('logout')
    async logout(@Req() payload: Request) {
        const user = payload.user;
        return this.authService.logout(user);
    }
}