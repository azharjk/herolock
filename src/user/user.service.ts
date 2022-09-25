import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonAuthentication } from 'src/authentication/types/common-authentication';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findOneByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({
      username,
    });
  }

  create(user: CommonAuthentication) {
    return this.userRepository.save(user);
  }
}
