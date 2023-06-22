import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LoggerUserRdo {
  @ApiProperty({
    description: 'The uniq user ID.',
    example: '13'
  })
  @Expose({name: '_id'})	// поле сущности
  public id: string;

  @ApiProperty({
    description: 'User unique address.',
    example: 'user@user.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: 'klasdku78dfua3k098o'
  })
  @Expose()
  public accessToken: string;
}
