import { Component, OnInit } from '@angular/core';
import { EmailService } from '@inbox/services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.loadEmails$().subscribe((d) => console.log(d));
  }
}
