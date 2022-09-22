import { Component, OnInit } from '@angular/core';
import { SigninFormService } from '@auth/services/signin-form.service';
import { FormGroup } from '@angular/forms';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { takeUntil } from 'rxjs';
import { SigninForm } from '@auth/models/signin-form.model';
import { AuthService } from '@auth/services/auth.service';
import { ToastService } from '@shared/services/toast.service';
import { ToastStatus } from '@shared/enums/toast-status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent extends DestroyComponent implements OnInit {
  signinForm!: FormGroup<SigninForm>;

  constructor(
    private signinFormService: SigninFormService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signinFormService.buildForm();
    this.signinFormService
      .form$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (form: FormGroup<SigninForm>) => (this.signinForm = form),
      });
  }

  onSubmit(): void {
    this.authService.signIn(this.signinForm.value).subscribe({
      next: () => this.router.navigateByUrl('/inbox'),

      error: ({ error }) => {
        let messageDetails: string;

        if (error.username) {
          messageDetails = 'Username not found';
        } else messageDetails = 'Invalid password';

        this.toastService.showInfoMessage(
          ToastStatus.WARN,
          'Incorrect credentials',
          messageDetails!
        );

        this.password!.reset();
      },
    });
  }

  get username() {
    return this.signinForm.get('username');
  }

  get password() {
    return this.signinForm.get('password');
  }
}
