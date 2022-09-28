import { Component, OnInit, Self } from '@angular/core';
import { SignupFormService } from '@auth/services/signup-form.service';
import { Observable, takeUntil } from 'rxjs';
import { FormGroup, AbstractControl } from '@angular/forms';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { AuthService } from '@auth/services/auth.service';
import { SignupForm } from '@auth/models/signup-form.model';
import { Router } from '@angular/router';
import { AuthState } from '@auth/state/auth.state';
import { HttpErrorResponse } from '@angular/common/http';
import { SignupCredentials } from '@auth/models/signup-credentials.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [SignupFormService],
})
export class SignupComponent extends DestroyComponent implements OnInit {
  isAuthLoading$: Observable<boolean> = this.authState.getAuthLoading$();

  signupForm!: FormGroup<SignupForm>;

  constructor(
    @Self() private signupFormService: SignupFormService,
    private authService: AuthService,
    private router: Router,
    private authState: AuthState
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signupFormService.buildForm();
    this.signupFormService
      .form$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (form: FormGroup<SignupForm>) => (this.signupForm = form),
      });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) return;

    const signUpPayload: SignupCredentials = {
      username: this.signupForm.value.username!,
      password: this.signupForm.value.password!,
      passwordConfirmation: this.signupForm.value.passwordConfirmation!,
    };

    this.handleSignup(signUpPayload);
  }

  handleSignup(signUpPayload: SignupCredentials): void {
    this.authService.signUp$(signUpPayload).subscribe({
      next: () => this.router.navigateByUrl('inbox'),

      error: (err: HttpErrorResponse) => {
        if (!err.status) {
          this.signupForm.setErrors({ noConnection: true });
        } else {
          this.signupForm.setErrors({ unknownError: true });
        }
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
