import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from '@shared/components/form-input/form-input.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SignoutComponent } from '@shared/components/signout/signout.component';
import { FormContainerComponent } from '@shared/components/form-container/form-container.component';
import { NotFoundPageComponent } from '@shared/components/not-found-page/not-found-page.component';

//PrimeNg modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    FormInputComponent,
    HeaderComponent,
    SignoutComponent,
    NotFoundPageComponent,
    FormContainerComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressSpinnerModule,
    InputTextModule,
    ReactiveFormsModule,
    MenubarModule,
    ToastModule,
    TableModule,
    DynamicDialogModule,
    InputTextareaModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    FormInputComponent,
    MenubarModule,
    HeaderComponent,
    SignoutComponent,
    ToastModule,
    NotFoundPageComponent,
    TableModule,
    DynamicDialogModule,
    InputTextareaModule,
    FormContainerComponent,
  ],
})
export class SharedModule {}
