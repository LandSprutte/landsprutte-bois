import { Field, InputType } from '@nestjs/graphql';
import { Bugdet } from '@prisma/client';

@InputType()
export class NewUserPayload {
  @Field()
  name: string;

  @Field()
  email: string;
}