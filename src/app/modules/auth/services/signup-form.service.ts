import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatchPassword } from '@auth/validators/match-password';
import { FormService } from '@shared/services/form.service';
import { UniqueUsername } from '@auth/validators/unique-username';

@Injectable()
export class SignupFormService extends FormService {
  constructor(private matchPassword: MatchPassword, private uniqueUsername: UniqueUsername) {
    super();
  }

  get config(): any {
    return {
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(20), this.matchPassword.validate],
      ],
      passwordConfirmation: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(20), this.matchPassword.validate],
      ],
    };
  }

  override customValidators: Object = { validators: [this.matchPassword.validate] };
}
