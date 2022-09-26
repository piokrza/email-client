import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
})
export class SignoutComponent extends DestroyComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.redirectToMainPage();
  }

  redirectToMainPage(): void {
    this.authService
      .signOut()
      .pipe(
        tap(() =>
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 3500)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
