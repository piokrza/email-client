import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { AuthState } from '@auth/state/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authState: AuthState, private router: Router) {}

  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authState.getSignedIn$().pipe(
      skipWhile((signedIn) => signedIn === null),
      take(1),
      tap(
        (authenticated: boolean) => !authenticated && this.router.navigateByUrl('/')
      )
    );
  }
}
