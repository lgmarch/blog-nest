import { ConflictException, Injectable } from '@nestjs/common';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { UserRole } from '@project/shared/shared-types';
import dayjs from 'dayjs';
import { AUTH_USER_EXISTS } from './auth.constant';

@Injectable()
export class AuthService {
  constructor(private readonly blogUserRepository: BlogUserMemoryRepository) {}

  public async register(dto: CreateUserDto) {
    const {email, firstName, lastName, password} = dto;

    const user = this.blogUserRepository.findByEmail(email);
    if(user) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const blogUser = {
      email, firstName, lastName, avatar: '', passwordHash: '',
      role: UserRole.User, registrationDate: dayjs().toDate(),
    }

    const userEntity = await new BlogUserEntity(blogUser).setPassword(password);

    return this.blogUserRepository.create(userEntity);
  }
}
