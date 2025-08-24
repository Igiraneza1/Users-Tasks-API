import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title!: string;

  @IsOptional()
  description!: string;

  @IsNumber()
  userId!: number; 
}
