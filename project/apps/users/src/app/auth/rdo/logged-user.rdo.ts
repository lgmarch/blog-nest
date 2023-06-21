import { Expose } from 'class-transformer';

export class LoggerUserRdo {
  @Expose({name: '_id'})	// поле сущности
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public accessToken: string;
}
