import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class GetLoginDto {
  @Field(() => User, { nullable: true })
  user: User;
}
