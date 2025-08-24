import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}

  // Create a new user
  create(createUserDto: CreateUserDto) {
    const user = this.usersRepo.create(createUserDto); 
    return this.usersRepo.save(user); 
  }

  // Get all users with their tasks
  findAll() {
    return this.usersRepo.find({ relations: ['tasks'] }); 
  }

  async findByEmail(email: string) {
  return this.usersRepo.findOne({ where: { email } });
}


  // Get one user by ID with tasks
  findOne(id: number) {
    return this.usersRepo.findOne({ where: { id }, relations: ['tasks'] });
  }

  // Delete user by ID
  remove(id: number) {
    return this.usersRepo.delete(id);
  }
}
