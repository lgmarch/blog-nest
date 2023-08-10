import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config';
import dbConfig from './db.config';

const ENV_USERS_FILE_PATH = 'apps/users/.users.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, dbConfig],
      envFilePath: ENV_USERS_FILE_PATH,
    }),
  ],
})
export class ConfigUsersModule {}
