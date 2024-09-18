import { IsString, IsEmail, IsStrongPassword, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword()
  @IsOptional()
  password?: string;

} 

