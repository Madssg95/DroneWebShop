import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {first, map, take} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private auth: TokenService) { }

  canActivate(): any {
    return this.auth.isAuthenticated().pipe(
      first(),
      map(authenticated => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );

  }
}
