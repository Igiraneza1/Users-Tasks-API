import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  name!: string;  

  @IsEmail({}, { message: 'Invalid email format' })
  email!: string;

  @MinLength(10, { message: 'Password must be at least 10 characters' })
  password!: string;
}
