import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      console.error('HTTP Error Intercepted:', error);
      if (error.status === 401) {
        console.warn('Unauthorized 401: Redirecting to Home');
        router.navigate(['/']);
      } else if (error.status === 500) {
        alert('Server Error (500): Please try again later.');
      }
      return throwError(() => error);
    })
  );
};
