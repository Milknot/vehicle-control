import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);

    return authService.validateToken()
        .pipe(
            map(response => {
                let status: boolean
                console.log(response)
                if (response.data.isValid) {
                    status = true;
                } else {
                    router.navigate(['/login']);
                    status = false;
                }
                authService.setValidated(status)
                return status
            }),
            catchError(error => {
                console.error('Token validation failed', error);
                router.navigate(['/on-maintenance']);
                return of(false);
            })
        );
};
