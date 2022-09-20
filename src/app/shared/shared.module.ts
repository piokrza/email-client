import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from '@shared/components/form-input/form-input.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SignoutComponent } from '@shared/components/signout/signout.component';

//PrimeNg modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [FormInputComponent, HeaderComponent, SignoutComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressSpinnerModule,
    InputTextModule,
    ReactiveFormsModule,
    MenubarModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    FormInputComponent,
    MenubarModule,
    HeaderComponent,
    SignoutComponent,
  ],
})
export class SharedModule {}
