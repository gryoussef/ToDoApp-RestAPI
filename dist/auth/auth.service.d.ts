import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './Dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtservice;
    constructor(userRepository: UserRepository, jwtservice: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsdto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
