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
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const CreateTask_dto_1 = require("./Dto/CreateTask.dto");
const task_model_1 = require("./task.model");
const passport_1 = require("@nestjs/passport");
const user_decorator_1 = require("../auth/user-decorator");
const user_entity_1 = require("../auth/user.entity");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getTasks(user) {
        return this.taskService.getTasks(user);
    }
    getTaskById(id, user) {
        return this.taskService.getTaskById(id, user);
    }
    createTask(createTaskDto, user) {
        return this.taskService.createTask(createTaskDto, user);
    }
    deleteTask(id, user) {
        return this.taskService.deleteTask(id, user);
    }
    updateTaskStatus(id, status, user) {
        return this.taskService.updateTaskStatus(id, status, user);
    }
};
__decorate([
    common_1.Get(),
    __param(0, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasks", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTask_dto_1.CreateTaskDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "deleteTask", null);
__decorate([
    common_1.Patch('/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body('status')), __param(2, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTaskStatus", null);
TaskController = __decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Controller('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map