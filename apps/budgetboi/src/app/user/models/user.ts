import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Bugdet } from '@prisma/client';

@ObjectType()
export class User {
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

}