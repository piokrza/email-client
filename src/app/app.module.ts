import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { AuthService } from '@auth/services/auth.service';
import { AuthInterceptor } from '@app/modules/auth/interceptors/auth.interceptor';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_CONFIG, APP_SERVICE_CONFIG } from '@app/app-config/app-config.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    AuthService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
