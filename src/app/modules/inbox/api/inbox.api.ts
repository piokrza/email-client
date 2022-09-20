import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '@inbox/models/email.model';
import { Observable } from 'rxjs';

@Injectable()
export class InboxApi {
  constructor(private http: HttpClient) {}

  loadEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(`${environment.BASE_URL}/emails`);
  }

  loadEmailById(id: string): Observable<Email> {
    return this.http.get<Email>(`${environment.BASE_URL}/emails/${id}`);
  }
}
