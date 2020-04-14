import {Task} from './task.entity';
import { Repository, EntityRepository } from 'typeorm';
import { CreateTaskDto } from './Dto/CreateTask.dto';
import { TaskStatus } from './task.model';
import { User } from 'src/auth/user.entity';
@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{


    async getTasks(user: User): Promise<Task[]> {
        const query=this.createQueryBuilder('task');
        query.where('task.userId=:userId',{userId:user.id});
        const tasks=await query.getMany();
        return tasks;
    }


    async createTask(createTaskDto:CreateTaskDto,user:User):Promise<Task>{
        const {title,description}=createTaskDto;
        const task=new Task();
        task.title=title;
        task.description=description;
        task.status=TaskStatus.OPEN;
        task.user=user;
        await task.save();
        delete task.user;
        return task;
    }


}