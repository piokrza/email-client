import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '@shared/services/form.service';

@Injectable()
export class SigninFormService extends FormService {
  constructor() {
    super();
  }

  get config(): any {
    return {
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    };
  }
}
