import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Google, User } from 'src/type/login';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
      ) {}
      async login(body: Google | User): Promise<{ access_token: string }> {
        const user = await this.userService.findOne(body.email);
        if ('password' in body) {
          if (user.password !== body.password) {
            throw new BadRequestException('invalid password');
          }
        }
    
        const payload = { sub: user.email, username: user.firstName };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    
      async create(req: any) {
        const user = await this.userService.create({
          email: req.email,
          firstName: req.firstName,
          lastName: req.lastName,
        });
    
        return user;
      }
}
