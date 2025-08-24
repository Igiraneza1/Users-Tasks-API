import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signup(name: string, email: string, password: string): Promise<{
        user: import("../users/user.entity").User;
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        user: import("../users/user.entity").User;
        token: string;
    }>;
    private generateToken;
}
