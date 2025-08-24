import { Controller, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { TasksService } from '../tasks/tasks.service';
import { UpdateTaskStatusDto } from '../tasks/dto/update-task-status.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateStatus(
    @Param('id') id: number,
    @Body() updateDto: UpdateTaskStatusDto,
  ) {
    return this.tasksService.updateStatus(+id, updateDto.status);
  }
}
