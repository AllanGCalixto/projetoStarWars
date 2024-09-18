import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/jwt.guard';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';


@Module({
  imports:[JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET'),
    }),
    global: true,
  }),PassportModule,
  UserModule,],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },]
})
export class AuthModule {}
