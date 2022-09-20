import { Injectable } from '@angular/core';
import { InboxApi } from '@inbox/api/inbox.api';
import { InboxState } from '@inbox/state/inbox.state';
import { Observable, tap, catchError, throwError, finalize } from 'rxjs';
import { Email } from '@inbox/models/email.model';
import { ToastService } from '@shared/services/toast.service';
import { ToastStatus } from '@app/shared/enums/toast-status.enum';

@Injectable()
export class EmailService {
  constructor(
    private inboxApi: InboxApi,
    private inboxState: InboxState,
    private toastService: ToastService
  ) {}

  loadEmails$(): Observable<Email[]> {
    this.inboxState.setEmailsLoading(true);

    return this.inboxApi.getEmails().pipe(
      tap((emails: Email[]) => this.inboxState.setEmails(emails)),
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
