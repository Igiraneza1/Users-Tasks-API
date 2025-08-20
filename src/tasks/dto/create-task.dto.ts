import { IsNotEmpty, IsNumber } from 'class-validator';
export class CreateTaskDto {
  @IsNotEmpty({ message: 'Title is required' })
  title!: string; 

  @IsNotEmpty({ message: 'Description is required' })
  description!: string;

  @IsNumber({}, { message: 'userId must be a number' })
  userId!: number;
}
