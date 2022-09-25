import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const isVerified = await this.authenticationService.verify(request);
    if (!isVerified) throw new UnauthorizedException();

    return true;
  }
}
