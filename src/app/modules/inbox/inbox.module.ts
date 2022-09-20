import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxRoutingModule } from '@inbox/inbox-routing.module';
import { HomeComponent } from '@inbox/components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, InboxRoutingModule],
})
export class InboxModule {}
