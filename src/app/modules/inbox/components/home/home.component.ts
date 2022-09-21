import { Component, OnInit } from '@angular/core';
import { EmailService } from '@inbox/services/email.service';
import { InboxState } from '@inbox/state/inbox.state';
import { EmailSummary } from '@inbox/models/email-summary.model';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { switchMap, takeUntil, tap, Observable } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';
import { EmailCreateComponent } from '@inbox/components/email-create/email-create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends DestroyComponent implements OnInit {
  emails!: EmailSummary[] | null;

  constructor(
    private emailService: EmailService,
    private inboxState: InboxState,
    private dialogService: DialogService
  ) {
    super();
  }

  ngOnInit(): void {
    this.emailService
      .loadEmails$()
      .pipe(
        switchMap((): Observable<EmailSummary[] | null> => {
          return this.inboxState.getEmails$().pipe(
            tap((emails: EmailSummary[] | null) => (this.emails = emails)),
            takeUntil(this.destroy$)
          );
        })
      )
      .subscribe();
  }

  onCreateEmail(): void {
    this.dialogService.open(EmailCreateComponent, {
      header: 'Create email',
      style: { width: '90%', maxWidth: '400px' },
    });
  }
}
