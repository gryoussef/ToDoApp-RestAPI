import  {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig:TypeOrmModuleOptions={
    type:'mysql',
    host:'localhost',
    port:3308,
    username:'root',
    password:'root',
    database:'nest_test',
    entities:[__dirname+'/../**/*.entity.js'],
    synchronize:true,
};