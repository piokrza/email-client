import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormService } from '@shared/services/form.service';

@Injectable({
  providedIn: 'root',
})
export class CreateEmailFormService extends FormService {
  constructor(protected override formBuilder: FormBuilder) {
    super(formBuilder);
  }

  get config(): any {
    return {
      to: ['', [Validators.required, Validators.email]],
      from: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      text: ['', [Validators.required]],
    };
  }
}
