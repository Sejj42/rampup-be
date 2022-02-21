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

  @IsNotEmpty()
  firstPodId: string;

  @IsNotEmpty()
  secondPodId: string;

  @IsNotEmpty()
  firstPodQty: number;

  @IsNotEmpty()
  secondPodQty: number;

  @IsNotEmpty()
  firstPodPrice: number;

  @IsNotEmpty()
  secondPodPrice: number;
}
