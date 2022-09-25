import { BadRequestException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { CommonAuthentication } from './types/common-authentication';

@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService) {}

  attempt(user: User, password: string) {
    return user.password === password;
  }

  async register(form: CommonAuthentication) {
    const isUserAlreadyExists = await this.userService.findOneByUsername(
      form.username,
    );
    if (isUserAlreadyExists) throw new BadRequestException();

    await this.userService.create(form);
  }

  async login(form: CommonAuthentication) {
    const user = await this.userService.findOneByUsername(form.username);
    if (!user) throw new BadRequestException();

    if (!this.attempt(user, form.password)) throw new BadRequestException();
  }

  async verify(request: Request) {
    if (!request.headers.authorization) return false;

    const token = request.headers.authorization;
    const base64Credentials = token.split(' ')[1];

    const buffer = Buffer.from(base64Credentials, 'base64');
    const [username, password] = buffer.toString('ascii').split(':');

    const user = await this.userService.findOneByUsername(username);

    if (!user) return false;

    return this.attempt(user, password);
  }
}
