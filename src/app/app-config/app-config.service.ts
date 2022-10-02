import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConfig } from '@shared/models/app-config.model';
import { config } from '@shared/enums/config.enum';

export const APP_SERVICE_CONFIG: InjectionToken<AppConfig> = new InjectionToken<AppConfig>(config.APP_CONFIG);

export const APP_CONFIG: AppConfig = {
  BASE_URL: environment.BASE_URL,
};
