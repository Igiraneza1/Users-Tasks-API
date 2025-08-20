import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: CreateAuthDto) {
    return this.authService.signup(dto.name ?? '', dto.email!, dto.password!);
  }

  @Post('login')
  login(@Body() dto: CreateAuthDto) {
    return this.authService.login(dto.email!, dto.password!);
  }
}
