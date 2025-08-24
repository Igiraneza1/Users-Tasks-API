import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') // All routes start with /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // POST /users → create new user
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // GET /users → get all users with their tasks
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // GET /users/:id → get a single user with their tasks
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  // DELETE /users/:id → delete a user
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
