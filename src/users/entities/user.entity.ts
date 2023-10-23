import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ nullable: true })
  id?: string;

  @Field()
  full_name: string;

  @Field()
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: string;
}
