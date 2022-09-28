import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { AvailableUsernameResponse } from '@auth/models/available-username-response.model';
import { SignupCredentials } from '@auth/models/signup-credentials.model';
import { SignupResponse } from '@auth/models/signup-response.model';
import { AuthState } from '@auth/state/auth.state';
import { CheckAuthResponse } from '@auth/models/check-auth-response.model';
import { SigninCredencials } from '@auth/models/signin-credentials.model';
import { Router } from '@angular/router';
import { APP_SERVICE_CONFIG } from '@app/app-config/app-config.service';
import { AppConfig } from '@app/app-config/app-config.model';

@Injectable()
export class AuthService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig,
    private http: HttpClient,
    private authState: AuthState,
    private router: Router
  ) {}

  usernameAvailable(username: string): Observable<AvailableUsernameResponse> {
    return this.http.post<AvailableUsernameResponse>(`${this.appConfig.BASE_URL}/auth/username`, {
      username: username,
    });
  }

  signUp(credentials: SignupCredentials): Observable<SignupResponse> {
    this.authState.setAuthLoading(true);

    return this.http.post<SignupResponse>(`${this.appConfig.BASE_URL}/auth/signup`, credentials).pipe(
      tap(() => this.authState.setSignedIn(true)),
      finalize(() => this.authState.setAuthLoading(false))
    );
  }

  signIn(credentials: SigninCredencials): Observable<any> {
    this.authState.setAuthLoading(true);

    return this.http.post<SigninCredencials>(`${this.appConfig.BASE_URL}/auth/signin`, credentials).pipe(
      tap(({ username }) => username && this.authState.setUsername(username)),
      tap(() => this.authState.setSignedIn(true)),
      finalize(() => this.authState.setAuthLoading(false))
    );
  }

  signOut(): Observable<Object> {
    return this.http.post<Object>(`${this.appConfig.BASE_URL}/auth/signout`, {}).pipe(
      tap(() => this.authState.setUsername('')),
      tap(() => this.authState.setSignedIn(false))
    );
  }

  checkAuth(): Observable<CheckAuthResponse> {
    return this.http.get<CheckAuthResponse>(`${this.appConfig.BASE_URL}/auth/signedin`).pipe(
      tap(({ authenticated }) => this.authState.setSignedIn(authenticated)),
      tap(({ username }) => username && this.authState.setUsername(username))
    );
  }
}
