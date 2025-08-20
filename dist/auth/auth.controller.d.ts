import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: CreateAuthDto): Promise<import("../users/user.entity").User>;
    login(dto: CreateAuthDto): Promise<{
        token: string;
    }>;
}
