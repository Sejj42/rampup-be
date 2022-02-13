import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PodsController } from './pods.controller';
import { PodsRepository } from './pods.repository';
import { PodsService } from './pods.service';

@Module({
  imports: [TypeOrmModule.forFeature([PodsRepository])],
  controllers: [PodsController],
  providers: [PodsService],
})
export class PodsModule {}
