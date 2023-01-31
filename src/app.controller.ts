import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Roulette from './database/roulette.entity';

@Controller('roulette')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllRoulettes(): Promise<Roulette[]> {
    const roulettes = await this.appService.getAllRoulettes();
    return roulettes;
  }

  @Get(':id')
  async getItemById(@Param('id') id: string): Promise<Roulette> {
    const message = await this.appService.getRouletteById(Number(id));
    return message;
  }

  @Post()
  async createMessage() {
    const newMessage = await this.appService.createRoulette();
    return newMessage;
  }
}
