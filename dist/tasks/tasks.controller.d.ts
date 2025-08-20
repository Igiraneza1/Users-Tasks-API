import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("./task.entity").Task>;
    findAll(): Promise<import("./task.entity").Task[]>;
    findOne(id: number): Promise<import("./task.entity").Task>;
    updateStatus(id: number, updateTaskStatusDto: UpdateTaskStatusDto): Promise<import("./task.entity").Task>;
    remove(id: number): Promise<import("./task.entity").Task>;
}
