import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { InboxApi } from '@inbox/api/inbox.api';
import { Email } from '@inbox/models/email.model';
import { Observable, catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailResolver implements Resolve<Email> {
  constructor(private inboxApi: InboxApi, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Email> {
    const { id } = route.params;

    return this.inboxApi.loadEmailById$(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    );
  }
}
