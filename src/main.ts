import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://localhost:4201', 'http://localhost:4200'] });
  app.useGlobalPipes(new ValidationPipe({
    // disableErrorMessages: true,
  }));

  const config = new DocumentBuilder().addBearerAuth()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [
      UserModule,
      ProfileModule,
    ],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(4201);
}

bootstrap();

