import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Farmer, FarmerDocument } from './farmer.schema';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@Injectable()
export class FarmerService {
    constructor(
        @InjectModel(Farmer.name) private farmerModel: Model<FarmerDocument>,
    ){}

    async createFarmer(createFarmerDto: CreateFarmerDto) : Promise<Farmer> {
        const createdFarmer = new this.farmerModel(createFarmerDto);
        return createdFarmer.save();
    }

    async findAll(): Promise<Farmer[]> {
        return this.farmerModel.find().populate('products').exec();
    }

    async findOne( id: string ): Promise<Farmer> {
        const farmer = await this.farmerModel.findById(id).populate('products').exec();
        if (!farmer) {
            throw new NotFoundException(`farmer with ID ${id} not found`);
        }
        return farmer;
    }

    async updateFarmer( id:string, updateFarmerDto:UpdateFarmerDto ) : Promise<Farmer>{
        const updatedFarmer = await this.farmerModel.findByIdAndUpdate(id, updateFarmerDto, { new:true }).exec();
        if(!updatedFarmer) {
            throw new NotFoundException(`farmer with ID ${id} not found`);
        }

        return updatedFarmer;
    }

    async deleteFarmer( id:string ): Promise<void> {
        const result = await this.farmerModel.findByIdAndDelete(id).exec();
        if(!result) {
            throw new NotFoundException(`farmer with Id ${id} not found`);
        }
    }
}
