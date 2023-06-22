import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address.',
    example: 'user@user.ru'
  })
  public email: string;

  @ApiProperty({
    description: 'User first name.',
    example: 'Mike',
  })
  public firstName: string;

  @ApiProperty({
    description: 'User last name.',
    example: 'Saida'
  })
  public lastName: string;

  @ApiProperty({
    description: 'User password.',
    example: '123456'
  })
  public password: string;

  @ApiProperty({
    description: 'User avatar path.',
    example: '/images/user.png'
  })
  public avatar?: string;
}
