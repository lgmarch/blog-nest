import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose({name: '_id'})
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public firstName: string;

  @Expose()
  public lastName: string;

  @Expose()
  public avatar: string;
}
