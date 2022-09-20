import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthState } from '@auth/state/auth.state';
import { takeUntil } from 'rxjs';
import { MenuService } from '@shared/services/menu.service';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends DestroyComponent implements OnInit {
  menuLinks!: MenuItem[];

  constructor(
    private authState: AuthState,
    private menuService: MenuService,
    private authService: AuthService
  ) {
    super();
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
        next: (signedIn: boolean) =>
          (this.menuLinks = this.menuService.setLinks(signedIn)),
      });
  }
}
