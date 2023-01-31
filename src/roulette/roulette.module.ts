import { Module } from '@nestjs/common';
import { RouletteController } from './roulette.controller';
import { RouletteService } from './roulette.service';
import Message from './roulette.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

// define the architecture and dependencies for the micro-service
@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [RouletteController],
  providers: [RouletteService],
})
export class MessageModule {}
