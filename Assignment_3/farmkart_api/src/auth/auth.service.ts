import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FarmerService } from '../farmer/farmer.service';
import { Farmer } from '../farmer/farmer.schema';
import * as bcrypt from 'bcrypt';
import { Customer } from 'src/customer/customer.schema';
import { CustomerService } from 'src/customer/customer.service';
import { Role } from './role.enum';

@Injectable()
export class AuthService {
    private readonly tokenBlacklist: Set<string> = new Set()
    constructor(
        private readonly farmerService: FarmerService,
        private readonly customerService: CustomerService,
        private readonly jwtService: JwtService,
    ) { }

    private async validateUser(email: string, password: string, role: Role.FARMER): Promise<Farmer> {
        let user;
        if (role === 'farmer') {
            user = await this.farmerService.findOneByEmail(email);
        }

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return user;
    }

    async login(email: string, password: string, role: Role.FARMER): Promise<{ access_token: string }> {
        const user = await this.validateUser(email, password, role);
        const payload = { email: user.email, sub: user._id, role };
        const access_token = await this.jwtService.signAsync(payload);

        return {
            access_token,
        };
    }
}