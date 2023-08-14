import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BlogUserModule } from './blog-user/blog-user.module';
import {
  ConfigUsersModule,
  getMongooseOptions,
} from '@project/config/config-users';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    BlogUserModule,
    ConfigUsersModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
