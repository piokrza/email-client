import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthState } from '@auth/state/auth.state';
import { takeUntil, Observable, tap, switchMap } from 'rxjs';
import { MenuService } from '@shared/services/menu.service';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { AuthService } from '@auth/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header [username]="(username$ | async)!" [links]="this.menuLinks"></app-header>
    <div class="container-max-w-md">
      <router-outlet></router-outlet>
    </div>
    <p-toast position="top-center"></p-toast>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends DestroyComponent implements OnInit {
  username$: Observable<string> = this.authState.getUsername$();

  menuLinks!: MenuItem[];

  constructor(
    private authState: AuthState,
    private menuService: MenuService,
    private authService: AuthService,
    private router: Router
  ) {
    super();

    this.router.events
      .pipe(
        tap((event: unknown): void => {
          event instanceof NavigationEnd && localStorage.setItem('previous-route', event.url);
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.authService
      .checkAuth$()
      .pipe(
        switchMap(() => this.authState.getSignedIn$()),
        tap((signedIn: boolean) => this.setLinks(signedIn)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  setLinks(signedIn: boolean): void {
    this.menuLinks = this.menuService.setLinks(signedIn);
  }
}
