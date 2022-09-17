import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [CommonModule, ButtonModule],
  exports: [ButtonModule, InputTextModule],
})
export class SharedModule {}
