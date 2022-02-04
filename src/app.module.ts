import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ProfilesController],
  providers: [AppService],
})
export class AppModule {}
