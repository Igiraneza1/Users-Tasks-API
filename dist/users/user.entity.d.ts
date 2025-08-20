import { Task } from '../tasks/task.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    tasks: Task[];
}
