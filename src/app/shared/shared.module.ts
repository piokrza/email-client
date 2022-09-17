import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  imports: [CommonModule, ButtonModule, ProgressSpinnerModule],
  exports: [ButtonModule, InputTextModule, ProgressSpinnerModule],
})
export class SharedModule {}
