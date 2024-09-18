import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}
  
  async create (createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto);

    return user;;
  }

  async findAll() {
    const users = await this.userModel.find().select('-password');
    return users;
  }

  async findOne(email: string) {
    const user = await this.userModel
      .findOne({ email: email });

    return user;
  }
}
