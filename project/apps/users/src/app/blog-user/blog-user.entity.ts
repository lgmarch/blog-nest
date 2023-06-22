import { IUser } from '@project/shared/shared-types';
import { UserRole } from '@project/shared/shared-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements IUser {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  passwordHash: string;
  role: UserRole;
  registrationDate: Date;

  constructor(blogUser: IUser) {
    this.fillEntity(blogUser);
  }

  public fillEntity(blogUser: IUser) {
    this._id = blogUser._id,
    this.email = blogUser.email,
    this.firstName = blogUser.firstName,
    this.lastName = blogUser.lastName,
    this.avatar = blogUser.avatar,
    this.passwordHash = blogUser.passwordHash,
    this.role = blogUser.role
  }

  public toObject() {
    return {...this};
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash (password, salt);

    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return await compare(password, this.passwordHash);
  }
}
