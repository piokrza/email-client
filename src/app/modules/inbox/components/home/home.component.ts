import { Component, OnInit } from '@angular/core';
import { EmailService } from '@inbox/services/email.service';
import { InboxState } from '@inbox/state/inbox.state';
import { EmailSummary } from '@inbox/models/email-summary.model';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { switchMap, takeUntil, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends DestroyComponent implements OnInit {
  emails!: EmailSummary[] | null;

  constructor(private emailService: EmailService, private inboxState: InboxState) {
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
}
