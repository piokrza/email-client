import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss'],
})
export class EmailReplyComponent extends DestroyComponent implements OnInit {
  emailForm!: FormGroup;
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
      subject: `RE: ${this.emailDetails?.subject}`,
      text: `\n------- ${this.emailDetails?.from} wrote:\n> ${this.emailDetails?.text}`,
    });
  }

  get from() {
    return this.emailForm.get('from');
  }

  get to() {
    return this.emailForm.get('to');
  }

  get subject() {
    return this.emailForm.get('subject');
  }

  get text() {
    return this.emailForm.get('text');
  }
}
