import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmailSummary } from '@inbox/models/email-summary.model';
import { Observable } from 'rxjs';
import { Email } from '@inbox/models/email.model';

@Injectable({
  providedIn: 'root',
})
export class InboxApi {
  constructor(private http: HttpClient) {}

  loadEmails$(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(`${environment.BASE_URL}/emails`);
  }

  loadEmailById$(id: string): Observable<Email> {
    return this.http.get<Email>(`${environment.BASE_URL}/emails/${id}`);
  }

  sendEmail(email: Email): Observable<any> {
    return this.http.post(`${environment.BASE_URL}/emails`, email);
  }
}
