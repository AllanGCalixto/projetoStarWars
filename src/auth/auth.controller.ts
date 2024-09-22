import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
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
    async googleAuthRedirect(@Req() req, @Res() res) {
        await this.authService.create(req.user);
        const googleaAuth = {
        google: true,
        email: req.user.email,
      };
      const token = await this.authService.login(googleaAuth);
    return res.redirect(
      `http://localhost:3002/auth/google/callback?token=${token.access_token}`,
    );
    }
    
    @Post('login')
    @Public()
    async login(@Body()body: Google | User) {
      return await this.authService.login(body);
    }
}
