import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProfileModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:enxx5z42@cluster0.2hsff.mongodb.net/Cluster0?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
