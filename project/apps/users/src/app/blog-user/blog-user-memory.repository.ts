import { Injectable } from '@nestjs/common';
import { IUser } from '@project/shared/shared-types';
import { ICrudRepository } from '@project/util/util-types';
import { BlogUserEntity } from './blog-user.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class BlogUserMemoryRepository implements ICrudRepository<BlogUserEntity, string, IUser> {
  private repository: {[key: string]: IUser} = {};

  public async create(entity: BlogUserEntity): Promise <IUser> {
    const item = {...entity.toObject(), _id: randomUUID()};
    this.repository[item._id] = item;

    return item;
  }

  public async findById(id: string): Promise<IUser> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }
    return null;
  }

  public async findByEmail(email: string): Promise<IUser> {
    const user = Object.values(this.repository).find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return { ...user};
  }

  public async update(id: string, entity: BlogUserEntity): Promise<IUser> {
    this.repository[id] = {...entity.toObject(), _id: id};

    return this.findById(id);
  }

  public async delete(id: string): Promise<IUser> {
    const item = this.findById(id);
    delete this.repository[id];

    return item;
  }
}
