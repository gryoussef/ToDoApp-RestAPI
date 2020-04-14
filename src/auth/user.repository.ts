import { Repository, Entity, EntityRepository } from "typeorm"
import { User } from "./user.entity"
import { AuthCredentialsDto } from "./Dto/auth-credentials.dto"
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        const{username,password}=authCredentialsDto;
        const user=new User();
        user.salt=await bcrypt.genSalt();

      
       user.password=await this.hashPassword(password,user.salt);

       
        user.username=username;
      try{
         user.save();
        }
      catch(error){
          if(error.code=='23550'){
               throw new ConflictException('Username already exist');
            }
            else{
                throw new InternalServerErrorException();
            }
        }
    }
    async validateUserPassword( authCredentialsdto:AuthCredentialsDto):Promise<string>{
        const {username,password}=authCredentialsdto;
        const user=await this.findOne({username});
        if(user && await user.validatePassword(password)){
            return username;
        }else{
            return null;
        }
      
    }
   private async hashPassword(password:string,salt:string):Promise<string> {
        return bcrypt.hash(password,salt);
    }
}
