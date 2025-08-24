import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(name: string, email: string, password: string): Promise<{
        user: import("../users/user.entity").User;
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        user: import("../users/user.entity").User;
        token: string;
    }>;
}
