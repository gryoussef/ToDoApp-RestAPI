import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './Dto/auth-credentials.dto';
export declare class AuthController {
    private authservice;
    constructor(authservice: AuthService);
    signUp(authCredentialsdto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsdto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
