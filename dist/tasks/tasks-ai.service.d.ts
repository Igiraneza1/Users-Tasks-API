export declare class TasksAIService {
    prioritizeTask(description: string): Promise<"high" | "low">;
    summarizeTasks(tasks: any[]): Promise<string>;
}
