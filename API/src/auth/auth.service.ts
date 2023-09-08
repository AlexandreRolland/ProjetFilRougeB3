import { Injectable } from '@nestjs/common';
import { SignupAuthDto } from './dto/signup-auth.dto';
import { SigninAuthDto } from './dto/signin-auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  signup(signupAuthDto: SignupAuthDto) {
      return this.userService.create(signupAuthDto);
  }

  async signin(signinAuthDto: SigninAuthDto) {
    const user = await this.validateUser(signinAuthDto);

    const payload = {
      email: user.email,
      username: user.username,
      role: user.role,
      id: user.id,
      client: user.client,
      decorateur: user.decorateur
    };

    return {
      access_token: this.generateJwtToken(payload),
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        client: user.client,
        decorateur: user.decorateur
    }
    }
  }
  

  async updatePassword(id: number, password: string) {
    const user = await this.userService.findOneById(id);
    const hashedPassword = await bcrypt.hash(password, 10);
    const userUpdate = { ...user, password: hashedPassword };
    await this.userService.update(id, userUpdate);

    return userUpdate;
  }

  async validateUser(signinAuthDto : SigninAuthDto) {
    const user = await this.userService.findOneByEmail(signinAuthDto.email);

    if (!user) throw new Error('User not found')

    const validPassword = await bcrypt.compare(signinAuthDto.password, user.password);

    if (!validPassword) throw new Error('Invalid password')
    
    return user;
  }

  generateJwtToken(payload) {
    return this.jwtService.sign(payload);
  }
}
