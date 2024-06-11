import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gama } from 'src/gama/gama.entity/gama.entity';
import { Producto } from 'src/producto/producto.entity/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
    constructor(
        @InjectRepository(Gama)
        private readonly gamaRepository: Repository<Gama>,
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ){}

    async seed(){
        for (const gamaData of gamasData){
            const gama = new Gama();
            gama.nombre = gamaData.nombre;
            await this.gamaRepository.save(gama);
        }
        for (const productoData of productosData){
            const producto = new Producto();
            producto.nombre = productoData.nombre;
            producto.descripcion = productoData.descripcion;
            producto.precio = productoData.precio;

            const gama = await this.gamaRepository.findOne({nombre: productoData.gama});
            producto.gama = gama;

            await this.productoRepository.save(producto);
        }
    }
}
