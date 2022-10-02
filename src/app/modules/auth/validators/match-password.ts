import { SignupForm } from '@auth/models/signup-form.model';
import { Injectable } from '@angular/core';
import { ValidationErrors, Validator, FormGroup } from '@angular/forms';

@Injectable()
export class MatchPassword implements Validator {
  validate(formGroup: FormGroup<SignupForm>): ValidationErrors | null {
    const { password, passwordConfirmation } = formGroup.value;

    if (password === passwordConfirmation) {
      return null;
    }

    return { passwordsDontMatch: true };
  }
}
