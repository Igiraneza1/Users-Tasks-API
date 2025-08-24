import { TasksService } from '../tasks/tasks.service';
import { UpdateTaskStatusDto } from '../tasks/dto/update-task-status.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    updateStatus(id: number, updateDto: UpdateTaskStatusDto): Promise<import("../tasks/task.entity").Task>;
}
