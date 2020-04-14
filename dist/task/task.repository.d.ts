import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './Dto/CreateTask.dto';
import { User } from 'src/auth/user.entity';
export declare class TaskRepository extends Repository<Task> {
    getTasks(user: User): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
}
