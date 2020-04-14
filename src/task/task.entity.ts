import {BaseEntity,  PrimaryGeneratedColumn, Entity, Column, ManyToOne} from 'typeorm';
import { TaskStatus } from './task.model';
import { User } from 'src/auth/user.entity';
import { userInfo } from 'os';
@Entity()
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column()
    description:string;
    @Column()
    status:TaskStatus;
    @Column()
    userId:number;
    @ManyToOne(type=>User,user=>user.tasks,{eager:false})
    user:User;
}