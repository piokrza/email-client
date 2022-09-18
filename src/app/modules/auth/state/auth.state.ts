import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  private signedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  setSignedIn(signedIn: boolean): void {
    this.signedIn$.next(signedIn);
  }

  getSignedIn$(): Observable<boolean> {
    return this.signedIn$.asObservable();
  }
}
