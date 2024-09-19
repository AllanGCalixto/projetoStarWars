import { Module } from '@nestjs/common';
import { StarWarsService } from './star-wars.service';
import { HttpModule } from '@nestjs/axios';
import { StarWarsController } from './star-wars.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule],
  controllers: [StarWarsController],
  providers: [StarWarsService, ConfigService]
})
export class StarWarsModule {}
