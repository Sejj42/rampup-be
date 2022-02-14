import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePodDto } from './dto/create-pod.dto';
import { GetPodsFilterDto } from './dto/get-pods-filter.dto';
import { UpdatePodDto } from './dto/update-pod.dto';
import { Pod } from './pod.entity';
import { PodsService } from './pods.service';

@Controller('pods')
export class PodsController {
  constructor(private podsService: PodsService) {}

  @Get()
  getPods(@Query() filterDto: GetPodsFilterDto): Promise<Pod[]> {
    return this.podsService.getPods(filterDto);
  }

  @Get('/:id')
  getPodById(@Param('id') id: string): Promise<Pod> {
    return this.podsService.getPodById(id);
  }

  @Post()
  createPod(@Body() createPodDto: CreatePodDto): Promise<Pod> {
    return this.podsService.createPod(createPodDto);
  }

  @Delete('/:id')
  deletePodById(@Param('id') id: string): Promise<void> {
    return this.podsService.deletePodById(id);
  }

  @Patch('/:id')
  updatePod(
    @Param(':id') id: string,
    @Body() updatePodDto: UpdatePodDto,
  ): Promise<Pod> {
    const {
      name,
      weightInG,
      color,
      brand,
      price,
      calories,
      protein,
      sugar,
      carbohydrates,
      sodium,
      cholesterol,
      totalFats,
    } = updatePodDto;
    return this.podsService.updatePodById(
      id,
      name,
      weightInG,
      color,
      brand,
      price,
      calories,
      protein,
      sugar,
      carbohydrates,
      sodium,
      cholesterol,
      totalFats,
    );
  }
}
