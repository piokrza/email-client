import { Component, OnInit } from '@angular/core';
import { SignupFormService } from '@auth/services/signup-form.service';
import { takeUntil } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends DestroyComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private signupFormService: SignupFormService) {
    super();
  }

  ngOnInit(): void {
    this.signupFormService.buildForm();
    this.signupFormService
      .form$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({ next: (form: FormGroup) => (this.signupForm = form) });
  }

  onSubmit(): void {
    console.log(this.signupForm.value);
  }
}
