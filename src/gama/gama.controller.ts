import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GamaService } from './gama.service';
import { GamaDto } from './dto/gama.dto/gama.dto';

@Controller('api/gama')
export class GamaController {
    constructor(private readonly gamaService: GamaService){}

    @Post()
    async create(@Body() createGamaDTO: GamaDto){
        return this.gamaService.create(createGamaDTO);
    }

    @Get('id')
    async findOne(@Param('id') id: number){
        return this.gamaService.findOne(id);
    }
}
