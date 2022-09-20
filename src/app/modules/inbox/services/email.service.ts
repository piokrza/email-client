import { Injectable } from '@angular/core';
import { InboxApi } from '@inbox/api/inbox.api';
import { InboxState } from '@inbox/state/inbox.state';
import { Observable, tap, catchError, throwError, finalize } from 'rxjs';
import { EmailSummary } from '@inbox/models/email-summary.model';
import { ToastService } from '@shared/services/toast.service';
import { ToastStatus } from '@app/shared/enums/toast-status.enum';

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
      tap((emails: EmailSummary[]) => this.inboxState.setEmails(emails)),
      catchError((err) => {
        this.toastService.showInfoMessage(
          ToastStatus.WARN,
          'Error',
          'Problems with fetching emails'
        );
        return throwError(err);
      }),
      finalize(() => this.inboxState.setEmailsLoading(false))
    );
  }
}
