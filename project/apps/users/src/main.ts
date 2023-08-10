/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const configService = app.get(ConfigService);

  const configSwagger = new DocumentBuilder()
    .setTitle('The "Users" service')
    .setDescription('Users service API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('spec', app, document);

  const port = configService.get('application.port');

  await app.listen(port);
  Logger.log(
    `
    🚀 Application is running on: http://localhost:${port}/${globalPrefix}
    📚 OpenApi on: http://localhost:${port}/spec
    🎯 Current mode: ${configService.get('application.environment')}`
  );
}

bootstrap();
