import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '@auth/components/signup/signup.component';
import { SigninComponent } from '@auth/components/signin/signin.component';
import { SignoutComponent } from '@shared/components/signout/signout.component';
import { InboxComponent } from '@auth/components/inbox/inbox.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signout',
    component: SignoutComponent,
  },
  {
    path: 'inbox',
    component: InboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
