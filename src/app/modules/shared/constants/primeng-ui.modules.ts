import { Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

export const PRIMENG_MODULES: Type<any>[] = [
  ButtonModule,
  ProgressSpinnerModule,
  InputTextModule,
  ReactiveFormsModule,
  MenubarModule,
  ToastModule,
  TableModule,
  DynamicDialogModule,
  InputTextareaModule,
];
