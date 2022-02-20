import { Order } from './order.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrdersFilterDto } from './dto/get-orders-filter.dto';

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {
  async getOrders(filterDto: GetOrdersFilterDto): Promise<Order[]> {
    const { search } = filterDto;

    const query = this.createQueryBuilder('order');

    if (search) {
      query.andWhere(
        `(LOWER(order.customerFirstName) LIKE LOWER(:search) OR LOWER(order.customerLastName) LIKE LOWER(:search) OR LOWER(order.totalQty) LIKE LOWER(:search) OR LOWER(order.price) LIKE LOWER(:search) OR LOWER(order.shippingCost) LIKE LOWER(:search) OR LOWER(order.created_at) LIKE LOWER(:search))`,
        { search: `%${search}%` },
      );
    }
    const orders = await query.getMany();
    return orders;
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const {
      customerFirstName,
      customerLastName,
      totalQty,
      price,
      shippingCost,
    } = createOrderDto;
    const order = this.create({
      customerFirstName,
      customerLastName,
      totalQty,
      price,
      shippingCost,
    });
    await this.save(order);
    return order;
  }
}
