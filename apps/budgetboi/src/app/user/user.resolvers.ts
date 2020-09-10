
import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { User } from './models/user';
import { UsersService } from './user.service';
import { NewUserPayload } from './models/newUserPayload';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(returns => User)
  async user(@Args('id') id: string): Promise<User> {
    const user = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(returns => User)
  async addUser(@Args('newUserPayload') payload: NewUserPayload): Promise<User> {
    const user = await this.usersService.create(payload) 
    return user;
  }
}