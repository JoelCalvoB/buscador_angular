import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

declare const Buffer: any;


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  public url: string = environment.url;
  public decodedToken="";

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let tokenReq;
    tokenReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer it4s`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return next.handle(tokenReq)
  }
}
