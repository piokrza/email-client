import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { switchMap, takeUntil } from 'rxjs';
import { InboxApi } from '@inbox/api/inbox.api';
import { Email } from '@inbox/models/email.model';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent extends DestroyComponent implements OnInit {
  email!: Email;
  constructor(private activatedRoute: ActivatedRoute, private inboxApi: InboxApi) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.inboxApi.loadEmailById$(id)),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (email: Email) => (this.email = email),
      });
  }
}
