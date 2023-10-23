import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { BadRequestException } from '@nestjs/common';
import { RegisterDto } from './dto/register-input.dto';
import { Token } from './entities/token.model';
import { User } from 'src/users/entities/user.entity';
import { LoginDto } from './dto/login-input.dts';

@Resolver(() => Token)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Token)
  async register(@Args('register_input') registerDto: RegisterDto) {
    if (registerDto.password !== registerDto.confirmPassword) {
      throw new BadRequestException({
        confirmPassword: 'Password and confirm password are not the same.',
      });
    }
    return await this.authService.createUser(registerDto);
  }

  @Mutation(() => User)
  async getUserFromToken(@Args('access_token') accessToken: string) {
    return await this.authService.getUserFromToken(accessToken);
  }

  @Mutation(() => Token)
  async login(@Args('login_input') loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Mutation(() => Token)
  async refreshToken(@Args('refresh_token') refreshToken: string) {
    return await this.authService.refreshToken(refreshToken);
  }
}
