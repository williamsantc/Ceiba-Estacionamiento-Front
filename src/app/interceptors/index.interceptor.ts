import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './baseurl.interceptor';
export const httpInterceptorProviders = [
  { useClass: BaseUrlInterceptor, provide: HTTP_INTERCEPTORS, multi: true }
]