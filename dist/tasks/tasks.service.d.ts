import { Repository } from 'typeorm';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from '../users/user.entity';
export declare class TasksService {
    private readonly tasksRepo;
    private readonly usersRepo;
    constructor(tasksRepo: Repository<Task>, usersRepo: Repository<User>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    updateStatus(id: number, status: TaskStatus): Promise<Task>;
    remove(id: number): Promise<void>;
}
