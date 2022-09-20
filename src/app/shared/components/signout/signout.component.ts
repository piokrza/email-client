import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
})
export class SignoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.redirectToMainPage();
  }

  redirectToMainPage(): void {
    this.authService.signOut().subscribe({
      next: () => {
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 3000);
      },
    });
  }
}
