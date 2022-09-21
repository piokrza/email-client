import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { Email } from '@inbox/models/email.model';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss'],
})
export class EmailShowComponent extends DestroyComponent implements OnInit {
  email!: Email;

  constructor(private activatedRoute: ActivatedRoute) {
    super();

    this.activatedRoute.data.subscribe(({ email }) => (this.email = email));
  }

  ngOnInit(): void {}
}
