import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID.',
    example: '13'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User unique address.',
    example: 'user@user.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User first name.',
    example: 'Mike',
  })
  @Expose()
  public firstName: string;

  @ApiProperty({
    description: 'User last name.',
    example: 'Saida'
  })
  @Expose()
  public lastName: string;

  @ApiProperty({
    description: 'User avatar path.',
    example: '/images/user.png'
  })
  @Expose()
  public avatar: string;
}
