import { IsDecimal, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetPodsFilterDto {
  @IsOptional()
  @IsString()
  search: string;

  // @IsOptional()
  // name?: string;

  // @IsOptional()
  // @IsNumber()
  // weightInG: number;

  // //@IsOptional()
  // //@IsString()
  // // color: string;

  // @IsOptional()
  // @IsString()
  // brand: string;

  // @IsOptional()
  // @IsNumber()
  // price: number;

  // @IsOptional()
  // @IsDecimal()
  // calories: number;

  // @IsOptional()
  // @IsDecimal()
  // protein: number;

  // @IsOptional()
  // @IsDecimal()
  // sugar: number;

  // @IsOptional()
  // @IsDecimal()
  // carbohydrates: number;

  // @IsOptional()
  // @IsDecimal()
  // sodium: number;

  // @IsOptional()
  // @IsDecimal()
  // cholesterol: number;

  // @IsOptional()
  // @IsDecimal()
  // totalFats: number;
}
