import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { identity } from 'rxjs';
import { Task } from './task.entity';
import { CreateTaskDto } from './Dto/CreateTask.dto';
import { TaskStatus } from './task.model';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/user-decorator';
import { User } from 'src/auth/user.entity';
import { userInfo } from 'os';

@UseGuards(AuthGuard())
@Controller('task')

export class TaskController {
    constructor(private taskService:TaskService,){}
@Get()
getTasks(@GetUser() user:User):Promise<Task[]>{
    return this.taskService.getTasks(user);
}

@Get('/:id')
getTaskById(@Param('id',ParseIntPipe) id:number,@GetUser() user:User):Promise<Task>{
    return this.taskService.getTaskById(id,user);
}


@Post()
createTask(@Body() createTaskDto:CreateTaskDto ,
@GetUser() user:User
):Promise<Task>{
    return this.taskService.createTask(createTaskDto,user);
    
}



@Get('/:id')
deleteTask(@Param('id',ParseIntPipe) id:number,@GetUser() user:User){
    return this.taskService.deleteTask(id,user);
}


@Patch('/:id')
updateTaskStatus(@Param('id',ParseIntPipe) id:number, @Body('status') status:TaskStatus,@GetUser() user:User):Promise<Task>{
return this.taskService.updateTaskStatus(id,status,user);
}


}
