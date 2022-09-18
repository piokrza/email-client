import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { map, Observable, catchError, of } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';
import { AvailableUsernameResponse } from '@auth/models/available-username-response.model';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    control: FormControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return this.authService.usernameAvailable(control).pipe(
      // if username is available map response to null
      map((res: AvailableUsernameResponse) => null),
      catchError((err): Observable<ValidationErrors> => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        }

        return of({ noConnection: true });
      })
    );
  };
}
