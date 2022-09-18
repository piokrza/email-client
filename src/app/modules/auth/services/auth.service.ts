import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AvailableUsernameResponse } from '@auth/models/available-username-response.model';
import { SignupCredentials } from '@auth/models/signup-credentials.model';
import { SignupResponse } from '@auth/models/signup-response.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  usernameAvailable(control: FormControl): Observable<any> {
    return this.http.post<AvailableUsernameResponse>(
      `${environment.BASE_URL}/auth/username`,
      {
        username: control.value,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(`${environment.BASE_URL}/auth/signup`, {
      credentials,
    });
  }
}
