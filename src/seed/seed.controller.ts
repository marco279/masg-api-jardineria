import { Controller, Post } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('api/seed')
export class SeedController {
    constructor(private readonly seedService: SeedService){}

    @Post()
    async seed(){
        return this.seedService.seed();
    }
}
