import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styles: [''],
})
export class FormInputComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() inputType: string = 'text';
}
