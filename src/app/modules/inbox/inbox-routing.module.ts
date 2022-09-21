import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@inbox/components/home/home.component';
import { PlaceholderComponent } from '@inbox/components/placeholder/placeholder.component';
import { EmailShowComponent } from '@inbox/components/email-show/email-show.component';
import { EmailResolver } from '@shared/resolvers/email.resolver';
import { NotFoundPageComponent } from '@shared/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundPageComponent,
      },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: { email: EmailResolver },
      },
      {
        path: '',
        component: PlaceholderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
