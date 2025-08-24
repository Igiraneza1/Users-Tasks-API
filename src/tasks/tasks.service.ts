import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { User } from '../users/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepo: Repository<Task>,
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const user = await this.usersRepo.findOneBy({ id: createTaskDto.userId });
    if (!user) throw new NotFoundException(`User with ID ${createTaskDto.userId} not found`);

    const task = this.tasksRepo.create({ ...createTaskDto, user });
    return this.tasksRepo.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepo.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepo.findOne({ where: { id }, relations: ['user'] });
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    return task;
  }

  async updateStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.findOne(id);
    if (!Object.values(TaskStatus).includes(status)) {
      throw new BadRequestException('Invalid task status');
    }
    task.status = status;
    return this.tasksRepo.save(task);
  }

  async remove(id: number): Promise<void> {
    const result = await this.tasksRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Task with ID ${id} not found`);
  }
}
