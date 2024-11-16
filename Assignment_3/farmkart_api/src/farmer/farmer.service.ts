import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Farmer, FarmerDocument } from './farmer.schema';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class FarmerService {
    constructor(
        @InjectModel(Farmer.name) private farmerModel: Model<FarmerDocument>,
    ) { }

    async createFarmer(createFarmerDto: CreateFarmerDto): Promise<Farmer> {
        const existingFarmer = await this.farmerModel.findOne({ email: createFarmerDto.email }).exec();
        if (existingFarmer) {
            throw new ConflictException(`Farmer with email ${createFarmerDto.email} already exists`);
        }

        const hashedPassword = await bcrypt.hash(createFarmerDto.password, 10);
        
        const createdFarmer = new this.farmerModel({ ...createFarmerDto, password: hashedPassword });
        return createdFarmer.save();
    }

    async findAll(): Promise<Farmer[]> {
        return this.farmerModel.find().populate('products').exec();
    }

    async findOne(id: string): Promise<Farmer> {
        const farmer = await this.farmerModel.findById(id).populate('products').exec();
        if (!farmer) {
            throw new NotFoundException(`farmer with ID ${id} not found`);
        }
        return farmer;
    }

    async findOneByEmail(email: string): Promise<Farmer> {
        const farmer = await this.farmerModel.findOne({ email }).exec();
        if (!farmer) {
            throw new NotFoundException(`Farmer with email ${email} not found`);
        }
        return farmer;
    }

    async updateFarmer(id: string, updateFarmerDto: UpdateFarmerDto): Promise<Farmer> {
        const hashedPassword = await bcrypt.hash(updateFarmerDto.password, 10);
        const updatedFarmer = await this.farmerModel.findByIdAndUpdate(id, { ...updateFarmerDto, password: hashedPassword }, { new: true }).exec();
        if (!updatedFarmer) {
            throw new NotFoundException(`farmer with ID ${id} not found`);
        }

        return updatedFarmer;
    }

    async deleteFarmer(id: string): Promise<void> {
        const result = await this.farmerModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`farmer with Id ${id} not found`);
        }
    }
}
