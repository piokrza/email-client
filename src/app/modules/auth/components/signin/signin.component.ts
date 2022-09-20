import { Component, OnInit } from '@angular/core';
import { SigninFormService } from '@auth/services/signin-form.service';
import { FormGroup } from '@angular/forms';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { takeUntil } from 'rxjs';
import { SigninForm } from '@auth/models/signin-form.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent extends DestroyComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private signinFormService: SigninFormService) {
    super();
  }

  ngOnInit(): void {
    this.signinFormService.buildForm();
    this.signinFormService
      .form$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (form: FormGroup<SigninForm>) => (this.signinForm = form),
      });
  }

  onSubmit(): void {
    console.log(this.signinForm.value);
  }

  get username() {
    return this.signinForm.get('username');
  }

  get password() {
    return this.signinForm.get('password');
  }
}
