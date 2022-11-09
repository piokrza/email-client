import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from '@shared/components/form-input/form-input.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SignoutComponent } from '@shared/components/signout/signout.component';
import { FormContainerComponent } from '@shared/components/form-container/form-container.component';
import { NotFoundPageComponent } from '@shared/components/not-found-page/not-found-page.component';
import { PRIMENG_MODULES } from '@shared/constants/primeng-ui.modules';

@NgModule({
  declarations: [
    FormInputComponent,
    HeaderComponent,
    SignoutComponent,
    NotFoundPageComponent,
    FormContainerComponent,
  ],
  imports: [CommonModule, ...PRIMENG_MODULES],
  exports: [
    ...PRIMENG_MODULES,
    FormInputComponent,
    HeaderComponent,
    SignoutComponent,
    NotFoundPageComponent,
    FormContainerComponent,
  ],
})
export class SharedModule {}
