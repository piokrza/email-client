import { Component, Input } from '@angular/core';
import { EmailSummary } from '@inbox/models/email-summary.model';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss'],
})
export class EmailIndexComponent {
  @Input() emails!: EmailSummary[];
}
