import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { GamaService } from 'src/gama/gama.service';

@Module({
  controllers: [ProductoController],
  providers: [ProductoService,GamaService]
})
export class ProductoModule {}
