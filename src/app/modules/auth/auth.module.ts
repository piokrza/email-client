import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '@auth/components/signin/signin.component';
import { SignupComponent } from '@auth/components/signup/signup.component';
import { AuthRoutingModule } from '@auth/auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@auth/services/auth.service';
import { UniqueUsername } from '@auth/validators/unique-username';
import { MatchPassword } from '@auth/validators/match-password';

const declarations: any[] = [SigninComponent, SignupComponent];
const imports: any[] = [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule];
const providers: any[] = [AuthService, UniqueUsername, MatchPassword];

@NgModule({
  declarations,
  imports,
  providers,
})
export class AuthModule {}
