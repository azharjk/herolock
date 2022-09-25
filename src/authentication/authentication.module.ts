import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [UserModule],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
