import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { UserRole } from '@project/shared/shared-types';
import dayjs from 'dayjs';
import { AuthUser } from './auth.constant';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly blogUserRepository: BlogUserMemoryRepository) {}

  public async register(dto: CreateUserDto) {
    const {email, firstName, lastName, password} = dto;

    const user = this.blogUserRepository.findByEmail(email);

    if(!user) {
      throw new ConflictException(AuthUser.AUTH_USER_EXISTS);
    }

    const blogUser = {
      email, firstName, lastName, avatar: '', passwordHash: '',
      role: UserRole.User, registrationDate: dayjs().toDate(),
    }

    const userEntity = await new BlogUserEntity(blogUser).setPassword(password);

    return this.blogUserRepository.create(userEntity);
  }

  public async login(dto: LoginUserDto) {
    const {email, password} = dto;

    const user = await this.blogUserRepository.findByEmail(email);

    if(!user) {
      throw new NotFoundException(AuthUser.AUTH_USER_NOT_FOUND);
    }

    const userEntity = await new BlogUserEntity(user);

    if(!userEntity.comparePassword(password)) {
      throw new UnauthorizedException(AuthUser.AUTH_USER_PASSWORD_WRONG);
    }

    return user;
  }

  public async getUserById(id: string) {
    return this.blogUserRepository.findById(id);
  }
}
