import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '@auth/components/signup/signup.component';
import { SigninComponent } from '@auth/components/signin/signin.component';
import { SignoutComponent } from '@shared/components/signout/signout.component';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    canActivate: [AuthGuard],
    component: SigninComponent,
  },
  {
    path: 'signup',
    canActivate: [AuthGuard],
    component: SignupComponent,
  },
  {
    path: 'signout',
    component: SignoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
