import { IsOptional, IsString } from 'class-validator';

export class GetOrdersFilterDto {
  @IsOptional()
  @IsString()
  search: string;
}
