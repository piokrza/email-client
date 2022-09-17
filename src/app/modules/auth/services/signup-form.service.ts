import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '@shared/services/form.service';

@Injectable()
export class SignupFormService extends FormService {
  constructor(protected override formBuilder: FormBuilder) {
    super(formBuilder);
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
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      passwordConfirmation: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
    };
  }
}
