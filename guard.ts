
import { Injectable, CanActivate, ExecutionContext, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { object } from 'zod';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

function validateRequest(request): boolean | Promise<boolean> | Observable<boolean>{
    let valor=Object.values(request.body);
            for (let x=0;Object.keys(request.body).length>x;x++){
                Logger.log(valor[x])
            }
            return true
    }
