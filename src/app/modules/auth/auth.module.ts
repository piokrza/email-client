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
import { SigninFormService } from '@auth/services/signin-form.service';
import { InboxComponent } from './components/inbox/inbox.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, InboxComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [SignupFormService, AuthService, UniqueUsername, SigninFormService],
})
export class AuthModule {}
