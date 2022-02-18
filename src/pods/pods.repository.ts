import { EntityRepository, Repository } from 'typeorm';
import { CreatePodDto } from './dto/create-pod.dto';
import { GetPodsFilterDto } from './dto/get-pods-filter.dto';
import { Pod } from './pod.entity';

@EntityRepository(Pod)
export class PodsRepository extends Repository<Pod> {
  async getPods(filterDto: GetPodsFilterDto): Promise<Pod[]> {
    const { search } = filterDto;

    const query = this.createQueryBuilder('pod');

    if (search) {
      query.andWhere(
        '(LOWER(pod.name) LIKE LOWER(:search) OR LOWER(pod.weightInG) LIKE LOWER(:search) OR LOWER(pod.color) LIKE LOWER(:search) OR LOWER(pod.brand) LIKE LOWER(:search) OR LOWER(pod.price) LIKE LOWER(:search) OR LOWER(pod.calories) LIKE LOWER(:search) OR LOWER(pod.protein) LIKE LOWER(:search) OR LOWER(pod.sugar) LIKE LOWER(:search) OR LOWER(pod.carbohydrates) LIKE LOWER(:search) OR LOWER(pod.sodium) LIKE LOWER(:search) OR LOWER(pod.cholesterol) LIKE LOWER(:search) OR LOWER(pod.totalFats) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }
    const pods = await query.getMany();
    return pods;
  }

  async createPod(createPodDto: CreatePodDto): Promise<Pod> {
    const {
      name,
      description,
      weightInG,
      color,
      brand,
      imageURL,
      price,
      calories,
      protein,
      sugar,
      carbohydrates,
      sodium,
      cholesterol,
      totalFats,
    } = createPodDto;
    const pod = this.create({
      name,
      description,
      weightInG,
      color,
      brand,
      imageURL,
      price,
      calories,
      protein,
      sugar,
      carbohydrates,
      sodium,
      cholesterol,
      totalFats,
    });
    await this.save(pod);
    return pod;
  }
}
