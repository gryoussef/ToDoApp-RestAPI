import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './Dto/CreateTask.dto';
import { TaskStatus } from './task.model';
import { User } from 'src/auth/user.entity';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(user: User): Promise<Task[]>;
    getTaskById(id: number, user: User): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: number, user: User): Promise<void>;
    updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task>;
}
