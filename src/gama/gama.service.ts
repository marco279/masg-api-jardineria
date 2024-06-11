import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gama } from './gama.entity/gama.entity';
import { RelationId, Repository } from 'typeorm';
import { GamaDto } from './dto/gama.dto/gama.dto';
import { relative } from 'path';

@Injectable()
export class GamaService {
    constructor(
        @InjectRepository(Gama)
        private readonly gamaRepository: Repository<Gama>,
    ){} 

    async create(createGamaDto: GamaDto): Promise<Gama> {
        const gama = new Gama();
        gama.nombre = createGamaDto.nombre;
        return this.gamaRepository.save(gama);
      }
    
      async findOne(id: number): Promise<Gama> {
        return this.gamaRepository.findOne(id, { RelationId: ['productos']} );
      }
}



