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
      professional: user.professional,
      id: user.id,
    };

    return {
      access_token: this.generateJwtToken(payload),
      user: {
        id: user.id,
        email: user.email,
        professional: user.professional
        // Vous pouvez ajouter d'autres informations utilisateur ici si nécessaire
    }
    }
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
