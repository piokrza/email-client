import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { AvailableUsernameResponse } from '@auth/models/available-username-response.model';
import { SignupCredentials } from '@auth/models/signup-credentials.model';
import { SignupResponse } from '@auth/models/signup-response.model';
import { AuthState } from '@auth/state/auth.state';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private authState: AuthState) {}

  usernameAvailable(control: FormControl): Observable<any> {
    return this.http.post<AvailableUsernameResponse>(
      `${environment.BASE_URL}/auth/username`,
      {
        username: control.value,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(`${environment.BASE_URL}/auth/signup`, credentials)
      .pipe(tap(() => this.authState.setSignedIn(true)));
  }
}
