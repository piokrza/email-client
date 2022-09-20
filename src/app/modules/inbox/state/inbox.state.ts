import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Email } from '@inbox/models/email.model';

@Injectable({
  providedIn: 'root',
})
export class InboxState {
  emails$: BehaviorSubject<Email[] | null> = new BehaviorSubject<Email[] | null>(
    null
  );
  emailsLoading$: BehaviorSubject<boolean | null> = new BehaviorSubject<
    boolean | null
  >(null);

  getEmails$(): Observable<Email[] | null> {
    return this.emails$.asObservable();
  }

  setEmails(emails: Email[]): void {
    this.emails$.next(emails);
  }

  getEmailsLoading$(): Observable<boolean | null> {
    return this.emailsLoading$.asObservable();
  }

  setEmailsLoading(emails: boolean): void {
    this.emailsLoading$.next(emails);
  }
}
