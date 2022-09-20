import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxRoutingModule } from '@inbox/inbox-routing.module';
import { HomeComponent } from '@inbox/components/home/home.component';
import { EmailCreateComponent } from '@inbox/components/email-create/email-create.component';
import { EmailIndexComponent } from '@inbox/components/email-index/email-index.component';
import { EmailReplyComponent } from '@inbox/components/email-reply/email-reply.component';
import { EmailShowComponent } from '@inbox/components/email-show/email-show.component';
import { EmailService } from '@inbox/services/email.service';
import { InboxApi } from '@inbox/api/inbox.api';
import { InboxState } from '@inbox/state/inbox.state';

@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailIndexComponent,
    EmailReplyComponent,
    EmailShowComponent,
  ],
  imports: [CommonModule, InboxRoutingModule],
  providers: [EmailService, InboxApi, InboxState],
})
export class InboxModule {}
