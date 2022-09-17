import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormInputComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressSpinnerModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    FormInputComponent,
  ],
})
export class SharedModule {}
