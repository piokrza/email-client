import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '@inbox/models/email.model';

@Injectable()
export class InboxApi {
  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http.get<Email[]>(`${environment.BASE_URL}/emails`);
  }
}
