import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({ 
     secret:'corona',
    signOptions:{
      expiresIn:3600,
    }
  }
  ),
  TypeOrmModule.forFeature([UserRepository])
],
//Providers
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController],
  exports:[
    JwtStrategy,
    PassportModule
  ]
})
export class AuthModule {}
