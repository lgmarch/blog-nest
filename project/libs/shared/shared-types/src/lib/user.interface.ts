import { UserRole } from './user-role.enum';

export interface IUser {
  _id?: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  passwordHash: string;
  role: UserRole;
  registrationDate: Date;
}
