import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUser, UserRole } from '@project/shared/shared-types';
import { Document } from 'mongoose';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class BlogUserModel extends Document implements IUser {
  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstName: string;

  @Prop({
    required: true,
  })
  public lastName: string;

  @Prop()
  public avatar: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.User,
  })
  public role: UserRole;

  @Prop({
    required: true,
  })
  public registrationDate: Date;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
