import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/decorators/public';
import { AuthService } from './auth.service';
import { Google, User } from 'src/type/login';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
    @Get('google')
    @Public()
    @UseGuards(AuthGuard('google'))
    async googleAuth() {}
  
    @Get('google/callback')
    @Public()
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req) {
        await this.authService.create(req.user);
        const googleaAuth = {
        google: true,
        email: req.user.email,
      };
      return this.authService.login(googleaAuth);
    }
    
    @Post('login')
    @Public()
    async login(@Body()body: Google | User) {
      return await this.authService.login(body);
    }
}
