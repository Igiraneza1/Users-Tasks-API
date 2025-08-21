import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    signup(name: string, email: string, password: string): Promise<User>;
    login(email: string, password: string): Promise<{
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: User;
    }>;
}
