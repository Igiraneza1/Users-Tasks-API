import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from './task.entity';
import { User } from '../users/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepo: Repository<Task>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.taskRepo.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    const task = await this.taskRepo.findOne({ where: { id }, relations: ['user'] });
    if (!task) throw new NotFoundException(`Task with id ${id} not found`);
    return task;
  }

  async create(userId: number, title: string, description: string) {
    const user = await this.userRepo.findOneBy({ id: userId });
    if (!user) throw new NotFoundException(`User with id ${userId} not found`);
    const task = this.taskRepo.create({ title, description, user, status: TaskStatus.PENDING });
    return this.taskRepo.save(task);
  }

  async updateStatus(id: number, status: TaskStatus) {
    const task = await this.findOne(id);
    task.status = status;
    return this.taskRepo.save(task);
  }

  async remove(id: number) {
    const task = await this.findOne(id);
    return this.taskRepo.remove(task);
  }
}
