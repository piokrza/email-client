import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxRoutingModule } from '@inbox/inbox-routing.module';
import { HomeComponent } from '@inbox/components/home/home.component';
import { EmailCreateComponent } from './components/email-create/email-create.component';
import { EmailIndexComponent } from './components/email-index/email-index.component';
import { EmailReplyComponent } from './components/email-reply/email-reply.component';
import { EmailShowComponent } from './components/email-show/email-show.component';

@NgModule({
  declarations: [HomeComponent, EmailCreateComponent, EmailIndexComponent, EmailReplyComponent, EmailShowComponent],
  imports: [CommonModule, InboxRoutingModule],
})
export class InboxModule {}
