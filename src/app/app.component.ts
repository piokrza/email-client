import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthState } from '@auth/state/auth.state';
import { takeUntil } from 'rxjs';
import { MenuService } from '@shared/services/menu.service';
import { DestroyComponent } from './standalone/components/destroy/destroy.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header [links]="this.menuLinks"></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends DestroyComponent implements OnInit {
  menuLinks!: MenuItem[];

  constructor(private authState: AuthState, private menuService: MenuService) {
    super();
  }

  ngOnInit(): void {
    this.setLinks();
  }

  setLinks(): void {
    this.authState
      .getSignedIn$()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (signedIn: boolean) =>
          (this.menuLinks = this.menuService.setLinks(signedIn)),
      });
  }
}
