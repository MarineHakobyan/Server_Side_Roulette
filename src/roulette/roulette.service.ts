import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Roulette from './roulette.entity';

export class RouletteService {
  constructor(
    @InjectRepository(Roulette)
    private rouletteRepository: Repository<Roulette>,
  ) {}

  async createRoulette() {
    const number = Math.floor(Math.random() * 38);
    const newNumber = this.rouletteRepository.create({ number });
    return newNumber;
  }
}
