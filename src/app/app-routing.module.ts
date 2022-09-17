import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@auth/auth.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> =>
      import('@auth/auth.module').then(
        ({ AuthModule }): AuthModule => AuthModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
