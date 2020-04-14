import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './Dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository) private userRepository:UserRepository
        ,private jwtservice:JwtService
        ){}
    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        this.userRepository.signUp(authCredentialsDto);
    }
    async signIn( authCredentialsdto:AuthCredentialsDto):Promise<{accessToken:string}>{
        const username=await this.userRepository.validateUserPassword(authCredentialsdto);
        if(!username){
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload:JwtPayload={username};
        const accessToken=await this.jwtservice.sign(payload);
        return{accessToken};
    }
}
