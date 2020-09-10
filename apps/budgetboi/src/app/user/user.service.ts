import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { NewUserPayload } from './models/newUserPayload';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class UsersService {

    constructor(private readonly db: PrismaService) {}

  async create(payload: NewUserPayload): Promise<User> {
    return payload as any;
  }

  async findOneById(id: string): Promise<User> {
    return {} as any;
  }
}