import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { map, Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate = (
    control: FormControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return this.http
      .post<any>(`${environment.BASE_URL}/auth/username`, {
        username: control.value,
      })
      .pipe(
        // if username is available map response to null
        map(() => null),
        catchError((err) => {
          if (err.error.username) {
            return of({ nonUniqueUsername: true });
          } else {
            return of({ noConnection: true });
          }
        })
      );
  };
}
