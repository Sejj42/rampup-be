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
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrdersFilterDto } from './dto/get-orders-filter.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './order.entity';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersContoller {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getOrders(@Query() filterDto: GetOrdersFilterDto): Promise<Order[]> {
    return this.ordersService.getOrders(filterDto);
  }

  @Get('/:id')
  getOrderById(@Param('id') id: string): Promise<Order> {
    return this.ordersService.getOrderById(id);
  }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Delete('/:id')
  deleteOrderById(@Param('id') id: string): Promise<void> {
    return this.ordersService.deleteOrderById(id);
  }

  @Patch('/:id/status')
  updateOrder(
    @Param(':id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    const {
      customerFirstName,
      customerLastName,
      totalQty,
      price,
      shippingCost,
    } = updateOrderDto;
    return this.ordersService.updateOrderById(
      id,
      customerFirstName,
      customerLastName,
      totalQty,
      price,
      shippingCost,
    );
  }
}
