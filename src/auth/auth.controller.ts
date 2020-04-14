import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './Dto/auth-credentials.dto';
import { GetUser } from './user-decorator';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authservice:AuthService){}
    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() authCredentialsdto:AuthCredentialsDto):Promise<void>{
        return this.authservice.signUp(authCredentialsdto);
    }
    @Post('/signin')
    signIn(@Body() authCredentialsdto:AuthCredentialsDto):Promise<{accessToken:string}>{
        return this.authservice.signIn(authCredentialsdto);
    }
   /* @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user:User){
        console.log(user);
    }*/
}
