import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthState } from '@auth/state/auth.state';
import { FormService } from '@shared/services/form.service';
import { take } from 'rxjs';

@Injectable()
export class EmailFormService extends FormService {
  private username!: string;

  constructor(protected override formBuilder: FormBuilder, private authState: AuthState) {
    super(formBuilder);
    this.authState
      .getUsername$()
      .pipe(take(1))
      .subscribe({
        next: (username: string) => (this.username = username),
      });
  }

  get config(): any {
    return {
      to: ['', [Validators.required, Validators.email]],
      from: { value: `${this.username}@angular-email.com`, disabled: true },
      subject: ['', [Validators.required]],
      text: ['', [Validators.required]],
    };
  }
}
