import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedController } from './seed/seed.controller';
import { SeedModule } from './seed/seed.module';
import { SeedService } from './seed/seed.service';
import { GamaModule } from './gama/gama.module';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [SeedModule, GamaModule, ProductoModule,
    // ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,

    })
  ],
  controllers: [AppController, SeedController],
  providers: [AppService, SeedService],
})
export class AppModule {}
