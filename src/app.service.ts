import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Roulette from './database/roulette.entity';

export class AppService {
  constructor(
    @InjectRepository(Roulette)
    private rouletteRepository: Repository<Roulette>,
  ) {}

  async getAllRoulettes() {
    const roulettes = await this.rouletteRepository.find();

    return roulettes;
  }

  async getRouletteById(id: number) {
    const roulette = await this.rouletteRepository.findOne({
      where: { id: id },
    });

    if (roulette) {
      return roulette;
    }

    throw new NotFoundException('Could not find the roulette');
  }

  async createRoulette(number: number) {
    const newNumber = this.rouletteRepository.create({ number });
    await this.rouletteRepository.save(newNumber);
    return newNumber;
  }
}
