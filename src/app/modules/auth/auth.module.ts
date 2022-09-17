import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "@auth/components/signin/signin.component";
import { SignupComponent } from "@auth/components/signup/signup.component";
import { AuthRoutingModule } from "@auth/auth-routing.module";
import { SharedModule } from "@shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule],
})
export class AuthModule {}
