import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Roulette from './roulette.entity';
import { RouletteService } from './roulette.service';

@Controller('roulette')
export class RouletteController {
  constructor(private readonly rouletteService: RouletteService) {}

  @Get()
  async getAllRoulettes(): Promise<Roulette[]> {
    const roulettes = await this.rouletteService.getAllRoulettes();
    return roulettes;
  }

  @Get(':id')
  async getItemById(@Param('id') id: string): Promise<Roulette> {
    const message = await this.rouletteService.getRouletteById(Number(id));
    return message;
  }

  @Post()
  async createMessage(@Body('number') number: number) {
    const newMessage = await this.rouletteService.createRoulette(number);
    return newMessage;
  }
}
