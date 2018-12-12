import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {TokenService} from '../../shared/services/token.service';
import {first, map, take} from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
              private auth: TokenService) { }

  canActivate(): any {
    return this.auth.getUserFromToken().
    pipe(
      first(),
      map(user => {
        if (user.role === 'Administrator' ) {
          return true;
        } else {
          // not logged in with right role so redirect to login page with the return url
          console.log('test');
          this.router.navigateByUrl('/denied');
          return false;
        }
      })
    );

  }
}
