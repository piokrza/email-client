import { FormControl } from '@angular/forms';

export interface CreateEmailForm {
  to: FormControl<string>;
  from: FormControl<string>;
  subject: FormControl<string>;
  text: FormControl<string>;
}
