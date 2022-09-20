import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { EmailService } from '@inbox/services/email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent extends DestroyComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe().subscribe({
      next: ({ id }) => this.emailService,
    });
  }
}
