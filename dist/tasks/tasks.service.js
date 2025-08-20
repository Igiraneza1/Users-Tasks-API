"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
const user_entity_1 = require("../users/user.entity");
let TasksService = class TasksService {
    constructor(taskRepo, userRepo) {
        this.taskRepo = taskRepo;
        this.userRepo = userRepo;
    }
    findAll() {
        return this.taskRepo.find({ relations: ['user'] });
    }
    async findOne(id) {
        const task = await this.taskRepo.findOne({ where: { id }, relations: ['user'] });
        if (!task)
            throw new common_1.NotFoundException(`Task with id ${id} not found`);
        return task;
    }
    async create(userId, title, description) {
        const user = await this.userRepo.findOneBy({ id: userId });
        if (!user)
            throw new common_1.NotFoundException(`User with id ${userId} not found`);
        const task = this.taskRepo.create({ title, description, user, status: task_entity_1.TaskStatus.PENDING });
        return this.taskRepo.save(task);
    }
    async updateStatus(id, status) {
        const task = await this.findOne(id);
        task.status = status;
        return this.taskRepo.save(task);
    }
    async remove(id) {
        const task = await this.findOne(id);
        return this.taskRepo.remove(task);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map