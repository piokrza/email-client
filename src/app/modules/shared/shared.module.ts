import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from '@shared/components/form-input/form-input.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SignoutComponent } from '@shared/components/signout/signout.component';
import { FormContainerComponent } from '@shared/components/form-container/form-container.component';
import { NotFoundPageComponent } from '@shared/components/not-found-page/not-found-page.component';
import { PRIMENG_MODULES } from '@shared/constants/primeng-ui.modules';
import { FormsModule } from '@angular/forms';

const declarations: any[] = [
  FormInputComponent,
  HeaderComponent,
  SignoutComponent,
  NotFoundPageComponent,
  FormContainerComponent,
];
const imports: any[] = [CommonModule, ...PRIMENG_MODULES, FormsModule];
const exports: any[] = [
  ...PRIMENG_MODULES,
  FormInputComponent,
  HeaderComponent,
  SignoutComponent,
  NotFoundPageComponent,
  FormContainerComponent,
];

@NgModule({
  declarations,
  imports,
  exports,
})
export class SharedModule {}
