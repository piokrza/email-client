import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { CreateEmailFormService } from '@inbox/services/create-email-form.service';
import { takeUntil } from 'rxjs';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss'],
})
export class EmailCreateComponent extends DestroyComponent implements OnInit {
  createEmailForm!: FormGroup;

  constructor(private createEmailFormService: CreateEmailFormService, private dialogRef: DynamicDialogRef) {
    super();
  }

  ngOnInit(): void {
    this.createEmailFormService.buildForm();
    this.createEmailFormService
      .form$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (form: FormGroup) => {
          this.createEmailForm = form;
          console.log(this.createEmailForm);
        },
      });
  }

  onSubmit(): void {
    console.log(2);
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
