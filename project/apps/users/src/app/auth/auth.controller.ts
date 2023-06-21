import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillObject } from '@project/util/util-core';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggerUserRdo } from './rdo/logged-user.rdo';
import { UserRdo } from './rdo/user.rdo';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);

    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const checkUser = await this.authService.login(dto);

    return fillObject(LoggerUserRdo, checkUser);
  }

  @Get('/:id')
  public async getById(@Param('id') id: string) {
    const user = await this.authService.getUserById(id);

    return fillObject(UserRdo, user);
  }
}
