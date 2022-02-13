import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrdersFilterDto } from './dto/get-orders-filter.dto';
import { Order } from './order.entity';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRepository)
    private ordersRepository: OrdersRepository,
  ) {}

  async getOrders(filterDto: GetOrdersFilterDto): Promise<Order[]> {
    return await this.ordersRepository.getOrders(filterDto);
  }

  async getOrderById(id: string): Promise<Order> {
    const found = await this.ordersRepository.findOne(id);
    if (!found) throw new NotFoundException(`Order ${id} not found`);
    return found;
  }

  createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersRepository.createOrder(createOrderDto);
  }

  async deleteOrderById(id: string): Promise<void> {
    const result = await this.ordersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Order ${id} not found`);
    }
  }

  async updateOrderById(
    id: string,
    customerFirstName: string,
    customerLastName: string,
    totalQty: number,
    price: number,
    shippingCost: number,
  ): Promise<Order> {
    const order = await this.getOrderById(id);
    order.customerFirstName = customerFirstName;
    order.customerLastName = customerLastName;
    order.totalQty = totalQty;
    order.price = price;
    order.shippingCost = shippingCost;
    await this.ordersRepository.save(order);
    return order;
  }
}
