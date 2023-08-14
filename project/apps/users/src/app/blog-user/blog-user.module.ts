import { Module } from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';

@Module({
  providers: [BlogUserRepository],
  imports: [
    MongooseModule.forFeature([
      { name: BlogUserModel.name, schema: BlogUserSchema },
    ]),
  ],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
