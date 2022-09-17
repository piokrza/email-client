import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormService } from '@shared/services/form.service';

@Injectable()
export class SignupFormService extends FormService {
  constructor(protected override formBuilder: FormBuilder) {
    super(formBuilder);
  }

  get config(): any {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
    };
  }
}
