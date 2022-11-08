import { Observable, tap, catchError, throwError, finalize } from 'rxjs';
import { Injectable } from '@angular/core';
import { InboxApi } from '@inbox/api/inbox.api';
import { InboxState } from '@inbox/state/inbox.state';
import { EmailSummary } from '@inbox/models/email-summary.model';
import { ToastService } from '@shared/services/toast.service';
import { ToastStatus } from '@shared/enums/toast-status.enum';
import { Email } from '@inbox/models/email.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EmailService {
  constructor(
    private inboxApi: InboxApi,
    private inboxState: InboxState,
    private toastService: ToastService
  ) {}

  loadEmails$(): Observable<EmailSummary[]> {
    this.inboxState.setEmailsLoading(true);

    return this.inboxApi.loadEmails$().pipe(
      tap((emails: EmailSummary[]): void => this.inboxState.setEmails(emails)),
      catchError((err: HttpErrorResponse): Observable<never> => {
        this.toastService.showInfoMessage(ToastStatus.WARN, 'Error', 'Problems with fetching emails');
        return throwError(err);
      }),
      finalize((): void => this.inboxState.setEmailsLoading(false))
    );
  }

  sendEmail(createEmailFormPayload: Email): Observable<Email> {
    return this.inboxApi.sendEmail(createEmailFormPayload).pipe(
      tap((): void =>
        this.toastService.showInfoMessage(ToastStatus.SUCCESS, 'Success!', 'Email sent successfully')
      ),
      catchError((err: HttpErrorResponse): Observable<never> => {
        this.toastService.showInfoMessage(ToastStatus.WARN, 'Ups!', 'Something went wrong...');
        return throwError(err);
      })
    );
  }
}
