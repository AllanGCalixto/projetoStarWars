import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [UserModule, MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async(configService: ConfigService)=> ({
      uri: configService.get<string>('MONGO_STRING'),
    }),

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
