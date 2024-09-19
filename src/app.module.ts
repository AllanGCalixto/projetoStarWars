import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { StarWarsController } from './star-wars/star-wars.controller';
import { StarWarsModule } from './star-wars/star-wars.module';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
     MongooseModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async(configService: ConfigService)=> ({
      uri: configService.get<string>('MONGO_STRING'),
    }),

  }),
     AuthModule,
     StarWarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
