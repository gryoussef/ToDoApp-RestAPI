import { MinLength, IsString, MaxLength } from "class-validator";

export class AuthCredentialsDto{
@MinLength(5)
@IsString()
@MaxLength(20)
username:string;
@MinLength(5)
@IsString()
@MaxLength(20)
password:string;
}