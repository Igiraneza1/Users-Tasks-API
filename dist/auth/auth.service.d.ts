import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    signup(name: string, email: string, password: string): Promise<User>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
