import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthState } from '@auth/state/auth.state';
import { takeUntil, Observable, tap } from 'rxjs';
import { MenuService } from '@shared/services/menu.service';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { AuthService } from '@auth/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
        tap((event: unknown) => {
          event instanceof NavigationEnd && localStorage.setItem('previous-route', event.url);
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe();
    this.setLinks();
  }

  setLinks(): void {
    this.authState
      .getSignedIn$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (signedIn: boolean) => (this.menuLinks = this.menuService.setLinks(signedIn)),
      });
  }
}
