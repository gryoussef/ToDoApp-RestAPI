import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './Dto/CreateTask.dto';
import { TaskStatus } from './task.model';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TaskService {
 
    constructor(@InjectRepository(TaskRepository) private taskRepository:TaskRepository){

    }
    async getTasks(user:User): Promise<Task[]> {
        return this.taskRepository.getTasks(user);
    }
    async getTaskById(id:number,user:User):Promise<Task>{
        const found=await this.taskRepository.findOne({where:{id,userId:user.id}});
        if(!found){
            throw new NotFoundException('Task not found');
        }
        return found;
    }


    async createTask(createTaskDto:CreateTaskDto,user:User):Promise<Task>{
        
        return this.taskRepository.createTask(createTaskDto,user);
    
    }



    async deleteTask(id:number, user:User):Promise<void>{
        const res=await this.taskRepository.delete({id,userId:user.id});
        if(res.affected===0){
            throw new NotFoundException('Task not found');
        }
       
    }


    
    async updateTaskStatus(id:number,status:TaskStatus,user:User):Promise<Task>{
        const task=await this.getTaskById(id,user);
        task.status=status;
        await task.save();
        return task;
    }
}
