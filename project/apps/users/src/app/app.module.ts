import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BlogUserModule } from './blog-user/blog-user.module';
import { ConfigUsersModule } from '@project/config/config-users';

@Module({
  imports: [AuthModule, BlogUserModule, ConfigUsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
