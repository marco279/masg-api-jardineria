import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoDto } from './dto/producto.dto/producto.dto';

@Controller('api/producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService){}

    @Post()
    async create(@Body() createProductoDTO: ProductoDto){
        return this.productoService.create(createProductoDTO);
    }

    @Get('id')
    async findOne(@Param('id') id: number){
        return this.productoService.findOne(id);
    }
}
