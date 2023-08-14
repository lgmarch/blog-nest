import { ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { getMongoConnectionString } from '@project/util/util-core';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          databaseName: config.get<string>('db.db'),
          host: config.get<string>('db.host'),
          port: config.get<string>('db.port'),
          username: config.get<string>('db.user'),
          password: config.get<string>('db.password'),
          authDatabase: config.get<string>('db.authBase'),
        }),
      };
    },
    inject: [ConfigService],
  };
}
