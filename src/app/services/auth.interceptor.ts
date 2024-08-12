import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private login: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //add the jwt token  which is in localstorage so that request current-user can be acessed
    let authReq = request;
    const token = this.login.getToken();
    console.log('Inside Interceptor');
    if (token != null) {
      authReq = authReq.clone({
        // [TOKEN_HEADER]: dynamically bind karibaku padiba nahale error asiba
        setHeaders: { [TOKEN_HEADER]: `Bearer ${token}` },
      });
    }
    // return next.handle(authReq);
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (error.error === 'Token has expired. Please log in again.') {
            this.snackBar.open(
              'Your session has expired. Please log in again.',
              'Close',
              {
                duration: 3000,
              }
            );
            this.router.navigate(['/login'], {
              queryParams: { sessionExpired: true },
            });
            this.login.logOut(); // Log out the user
          } else {
            this.snackBar.open('Unauthorized access. Please log in.', 'Close', {
              duration: 3000,
            });
          }
        }
        return throwError(error);
      })
    );
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
