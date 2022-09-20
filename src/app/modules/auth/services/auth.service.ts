import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { AvailableUsernameResponse } from '@auth/models/available-username-response.model';
import { SignupCredentials } from '@auth/models/signup-credentials.model';
import { SignupResponse } from '@auth/models/signup-response.model';
import { AuthState } from '@auth/state/auth.state';
import { CheckAuthResponse } from '@auth/models/check-auth-response.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private authState: AuthState) {}

  usernameAvailable(username: string): Observable<AvailableUsernameResponse> {
    return this.http.post<AvailableUsernameResponse>(
      `${environment.BASE_URL}/auth/username`,
      {
        username: username,
      }
    );
  }

  signUp(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http
      .post<SignupResponse>(`${environment.BASE_URL}/auth/signup`, credentials)
      .pipe(tap(() => this.authState.setSignedIn(true)));
  }

  signOut() {
    return this.http
      .post(`${environment.BASE_URL}/auth/signout`, {})
      .pipe(tap(() => this.authState.setSignedIn(false)));
  }

  checkAuth(): Observable<any> {
    return this.http
      .get<CheckAuthResponse>(`${environment.BASE_URL}/auth/signedin`)
      .pipe(tap(({ authenticated }) => this.authState.setSignedIn(authenticated)));
  }
}
