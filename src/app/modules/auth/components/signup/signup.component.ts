import { Component, OnInit } from '@angular/core';
import { SignupFormService } from '@auth/services/signup-form.service';
import { takeUntil } from 'rxjs';
import { FormGroup, AbstractControl } from '@angular/forms';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent extends DestroyComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private signupFormService: SignupFormService,
    private authService: AuthService,
    private router: Router
  ) {
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
    if (this.signupForm.invalid) return;

    this.authService.signup(this.signupForm.value).subscribe({
      next: () => {},
      error: (err) => {
        if (!err.status) {
          this.signupForm.setErrors({ noConnection: true });
        } else this.signupForm.setErrors({ unknownError: true });
      },
    });
  }

  get username(): AbstractControl | null {
    return this.signupForm.get('username');
  }

  get password(): AbstractControl | null {
    return this.signupForm.get('password');
  }

  get passwordConfirmation(): AbstractControl | null {
    return this.signupForm.get('passwordConfirmation');
  }
}
