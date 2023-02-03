import { Controller, Get } from '@nestjs/common';
import Roulette from './roulette.entity';
import { RouletteService } from './roulette.service';

@Controller('roulette')
export class RouletteController {
  constructor(private readonly rouletteService: RouletteService) {}

  @Get()
  async getAllRoulettes(): Promise<Roulette> {
    const roulette = await this.rouletteService.createRoulette();
    return roulette;
  }
}
