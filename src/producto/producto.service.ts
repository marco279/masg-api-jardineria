import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './producto.entity/producto.entity';
import { Repository } from 'typeorm';
import { Gama } from 'src/gama/gama.entity/gama.entity';
import { ProductoDto } from './dto/producto.dto/producto.dto';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
        @InjectRepository(Gama)
        private readonly gamaRepository: Repository<Gama>,
    ){}

    async create(createProductoDto: ProductoDto): Promise<Producto> {
        const producto = new Producto();
        producto.nombre = createProductoDto.nombre;
        producto.descripcion = createProductoDto.descripcion;
        producto.precio = createProductoDto.precio;
    
        const gama = await this.gamaRepository.findOne(createProductoDto.gamaId);
        producto.gama = gama;
    
        return this.productoRepository.save(producto);
      }
    
      async findOne(id: number): Promise<Producto> {
        return this.productoRepository.findOne(id, { relations: ['gama'] });
      }
}
