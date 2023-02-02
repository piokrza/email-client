import { EmailForm } from '@inbox/models/email-form.model';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
})
export class EmailReplyComponent extends DestroyComponent implements OnInit {
  emailForm!: FormGroup<EmailForm>;
  emailDetails = this.dialogConfig.data;

  constructor(
    private dialogConfig: DynamicDialogConfig,
    private dialogRef: DynamicDialogRef,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.emailForm = this.buildReplyForm();
  }

  onSubmit(): void {
    this.dialogRef.close(this.emailForm.value);
  }

  buildReplyForm(): FormGroup {
    return this.formBuilder.group({
      from: { value: this.emailDetails?.to, disabled: true },
      to: this.emailDetails?.from,
      subject: `RE: ${this.emailDetails?.subject!}`,
      text: `\n------- ${this.emailDetails?.from} wrote:\n> ${this.emailDetails?.text}`,
    });
  }

  get from() {
    return this.emailForm.get('from') as FormControl;
  }

  get to() {
    return this.emailForm.get('to') as FormControl;
  }

  get subject() {
    return this.emailForm.get('subject') as FormControl;
  }

  get text() {
    return this.emailForm.get('text') as FormControl;
  }
}
