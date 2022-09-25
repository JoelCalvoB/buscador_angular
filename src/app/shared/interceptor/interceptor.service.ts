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
    debugger;
    let tokenReq;
   
    switch (localStorage.getItem('tipo_header')) {
      case 'token':
        tokenReq = req.clone({   ///login FAD
          setHeaders: {
            'Authorization': `Bearer it4s`,
            'Content-Type': 'application/json',
                }
        });
      
        break;
      default:
        tokenReq = req.clone({
          setHeaders: {
            'Content-Type': 'application/json'
          }
        });

        break;
    }
    return next.handle(tokenReq)
  }
}
