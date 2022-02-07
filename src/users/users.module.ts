import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import { ProfilesModule } from 'src/profiles/profiles.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ProfilesModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
