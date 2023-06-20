import { IUser } from '@project/shared/shared-types';
import { UserRole } from 'libs/shared/shared-types/src/lib/user-role.enum';

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
}
