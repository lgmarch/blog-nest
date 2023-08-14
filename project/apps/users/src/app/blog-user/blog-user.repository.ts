import { Injectable } from '@nestjs/common';
import { IUser } from '@project/shared/shared-types';
import { ICrudRepository } from '@project/util/util-types';
import { BlogUserEntity } from './blog-user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { BlogUserModel } from './blog-user.model';
import { Model } from 'mongoose';

@Injectable()
export class BlogUserRepository
  implements ICrudRepository<BlogUserEntity, string, IUser>
{
  constructor(
    @InjectModel(BlogUserModel.name)
    private readonly blogUserModel: Model<BlogUserModel>
  ) {}

  public async create(item: BlogUserEntity): Promise<IUser> {
    const newBlogUser = new this.blogUserModel(item);
    return newBlogUser.save();
  }

  public async findById(id: string): Promise<IUser | null> {
    return this.blogUserModel.findOne({ _id: id }).exec();
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    return this.blogUserModel.findOne({ email }).exec();
  }

  public async update(id: string, item: BlogUserEntity): Promise<IUser> {
    return this.blogUserModel
      .findByIdAndUpdate(id, item.toObject(), { new: true })
      .exec();
  }

  public async delete(id: string): Promise<IUser> {
    const item = this.findById(id);
    this.blogUserModel.deleteOne({ _id: id }).exec();

    return item;
  }
}
