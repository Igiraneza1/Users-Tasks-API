import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { User } from '../users/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, User]), // Register both Task & User repositories
    AuthModule, // So we can use JwtAuthGuard
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
