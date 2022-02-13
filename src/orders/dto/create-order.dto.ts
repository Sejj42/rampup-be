import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  customerFirstName: string;

  @IsNotEmpty()
  customerLastName: string;

  @IsNotEmpty()
  totalQty: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  shippingCost: number;
}
