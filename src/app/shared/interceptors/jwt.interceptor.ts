import { Injectable } from '@angular/core';
import { PLATFORM_ID, Inject, Injector } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

import * as express from 'express';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentification/authentification.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
		@Inject(PLATFORM_ID)
		private platformId: string,
		private injector: Injector,
		private authService: AuthenticationService
	) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
	
		if(1) {
		  return next.handle(request);
		} else {
		  return next.handle(request);
		}
	  }
}
