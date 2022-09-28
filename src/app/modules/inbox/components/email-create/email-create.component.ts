import { takeUntil } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Self } from '@angular/core';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { EmailFormService } from '@app/modules/inbox/services/email-form.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss'],
  providers: [EmailFormService],
})
export class EmailCreateComponent extends DestroyComponent implements OnInit {
  createEmailForm!: FormGroup;

  constructor(@Self() private emailFormService: EmailFormService, private dialogRef: DynamicDialogRef) {
    super();
  }

  ngOnInit(): void {
    this.emailFormService.buildForm();
    this.emailFormService
      .form$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (form: FormGroup) => (this.createEmailForm = form),
      });
  }

  onSubmit(): void {
    this.dialogRef.close(this.createEmailForm.value);
  }

  get to() {
    return this.createEmailForm.get('to');
  }

  get from() {
    return this.createEmailForm.get('from');
  }

  get subject() {
    return this.createEmailForm.get('subject');
  }

  get text() {
    return this.createEmailForm.get('text');
  }
}
