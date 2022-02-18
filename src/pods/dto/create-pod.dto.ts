import { IsNotEmpty } from 'class-validator';

export class CreatePodDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  weightInG: number;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  imageURL: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  calories: number;

  @IsNotEmpty()
  protein: number;

  @IsNotEmpty()
  sugar: number;

  @IsNotEmpty()
  carbohydrates: number;

  @IsNotEmpty()
  sodium: number;

  @IsNotEmpty()
  cholesterol: number;

  @IsNotEmpty()
  totalFats: number;
}
