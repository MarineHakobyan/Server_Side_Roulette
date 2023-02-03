import { Module } from '@nestjs/common';
import { RouletteController } from './roulette.controller';
import { RouletteService } from './roulette.service';
import Roulette from './roulette.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

// define the architecture and dependencies for the micro-service
@Module({
  imports: [TypeOrmModule.forFeature([Roulette])],
  controllers: [RouletteController],
  providers: [RouletteService],
})
export class RouletteModule {}
