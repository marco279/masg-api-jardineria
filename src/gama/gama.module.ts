import { Module } from '@nestjs/common';
import { GamaController } from './gama.controller';
import { GamaService } from './gama.service';

@Module({
  controllers: [GamaController],
  providers: [GamaService]
})
export class GamaModule {}
