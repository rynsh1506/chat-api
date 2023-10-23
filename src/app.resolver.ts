import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class App {
  @Query(() => String)
  async hello() {
    return 'Hello World';
  }
}
