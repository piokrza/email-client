import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConfig } from '@app/app-config/app-config.model';

export const APP_SERVICE_CONFIG: InjectionToken<AppConfig> = new InjectionToken<AppConfig>('app-config');

export const APP_CONFIG: AppConfig = {
  BASE_URL: environment.BASE_URL,
};
