import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { map, Observable, skipWhile, take, tap } from 'rxjs';
import { AuthState } from '@auth/state/auth.state';
import { AuthService } from '@auth/services/auth.service';
import { CheckAuthResponse } from '@auth/models/check-auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authState: AuthState, private router: Router, private authService: AuthService) {}

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authState.getSignedIn$().pipe(
      skipWhile((signedIn) => signedIn === null),
      take(1),
      tap((authenticated: boolean) => !authenticated && this.router.navigateByUrl('/'))
    );
  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.checkAuth$().pipe(
      take(1),
      tap(({ authenticated }: CheckAuthResponse) => authenticated && this.router.navigateByUrl('/inbox')),
      map(({ authenticated }: CheckAuthResponse) => !authenticated)
    );
  }
}
