import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfilesModule } from './profiles/profiles.module';

import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://root:enxx5z42@cluster0.2hsff.mongodb.net/Cluster0?retryWrites=true&w=majority"),
    // UsersModule,
    ProfilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
