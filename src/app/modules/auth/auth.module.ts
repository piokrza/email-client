import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '@auth/components/signin/signin.component';
import { SignupComponent } from '@auth/components/signup/signup.component';
import { AuthRoutingModule } from '@auth/auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormService } from '@auth/services/signup-form.service';
import { AuthService } from '@auth/services/auth.service';
import { UniqueUsername } from '@auth/validators/unique-username';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [SignupFormService, AuthService, UniqueUsername],
})
export class AuthModule {}
