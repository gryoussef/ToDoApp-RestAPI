import { Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./Dto/auth-credentials.dto";
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    validateUserPassword(authCredentialsdto: AuthCredentialsDto): Promise<string>;
    private hashPassword;
}
