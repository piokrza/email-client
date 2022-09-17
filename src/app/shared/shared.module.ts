import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg modules
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule],
  exports: [ButtonModule],
})
export class SharedModule {}
