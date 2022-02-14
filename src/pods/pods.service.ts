import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePodDto } from './dto/create-pod.dto';
import { GetPodsFilterDto } from './dto/get-pods-filter.dto';
import { Pod } from './pod.entity';
import { PodsRepository } from './pods.repository';

@Injectable()
export class PodsService {
  constructor(
    @InjectRepository(PodsRepository)
    private podsRepository: PodsRepository,
  ) {}

  async getPods(filterDto: GetPodsFilterDto): Promise<Pod[]> {
    return await this.podsRepository.getPods(filterDto);
  }

  async getPodById(id: string): Promise<Pod> {
    const found = await this.podsRepository.findOne(id);
    if (!found) throw new NotFoundException(`Pod ${id} doesn't exist SHEESH`);
    return found;
  }

  async deletePodById(id: string): Promise<void> {
    const result = await this.podsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pod ${id} not found`);
    }
  }

  createPod(createPodDto: CreatePodDto): Promise<Pod> {
    return this.podsRepository.createPod(createPodDto);
  }

  async updatePodById(
    id: string,
    name: string,
    weightInG: number,
    color: string,
    brand: string,
    price: number,
    calories: number,
    protein: number,
    sugar: number,
    carbohydrates: number,
    sodium: number,
    cholesterol: number,
    totalFats: number,
  ): Promise<Pod> {
    const pod = await this.getPodById(id);
    pod.name = name;
    pod.weightInG = weightInG;
    pod.color = color;
    pod.brand = brand;
    pod.price = price;
    pod.calories = calories;
    pod.protein = protein;
    pod.sugar = sugar;
    pod.carbohydrates = carbohydrates;
    pod.sodium = sodium;
    pod.cholesterol = cholesterol;
    pod.totalFats = totalFats;
    await this.podsRepository.save(pod);
    return pod;
  }
}
