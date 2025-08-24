
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksAIService {
  async prioritizeTask(description: string) {
    if (description.includes('urgent')) return 'high';
    return 'low';
  }

  async summarizeTasks(tasks: any[]) {
    return `You have ${tasks.length} tasks.`;
  }
}
