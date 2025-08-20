import { Repository } from 'typeorm';
import { Task, TaskStatus } from './task.entity';
import { User } from '../users/user.entity';
export declare class TasksService {
    private taskRepo;
    private userRepo;
    constructor(taskRepo: Repository<Task>, userRepo: Repository<User>);
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    create(userId: number, title: string, description: string): Promise<Task>;
    updateStatus(id: number, status: TaskStatus): Promise<Task>;
    remove(id: number): Promise<Task>;
}
