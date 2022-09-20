import { Component, Input, OnInit } from '@angular/core';
import { Email } from '@inbox/models/email.model';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss'],
})
export class EmailIndexComponent implements OnInit {
  @Input() emails!: Email[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.emails);
  }
}
