import { Controller,Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';
import { Farmer } from './farmer.schema';

@Controller('farmer')
export class FarmerController {
    constructor( private readonly farmerService : FarmerService){}

    @Post()
    async create(@Body() createFarmerDto : CreateFarmerDto) : Promise<Farmer>{
        return this.farmerService.createFarmer(createFarmerDto);
    }

    @Get()
    async findAll(): Promise<Farmer[]> {
        return this.farmerService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string) : Promise<Farmer> {
        return this.farmerService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateFarmerDto : UpdateFarmerDto,
    ) : Promise<Farmer> {
        return this.farmerService.updateFarmer(id, updateFarmerDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) : Promise<void> {
        await this.farmerService.deleteFarmer(id);
    }
}
