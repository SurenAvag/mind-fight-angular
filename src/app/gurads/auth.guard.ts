import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';
import {AuthService} from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
    private publicRoutes: Array<string> = ['/auth', '/auth/login'];

    constructor(private authService: AuthService,
                private router: Router,) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Promise<boolean> {
        if (this.authService.isLoggedIn) return Promise.resolve(true);
        return this.authService.checkUser()
            .then((user: User) => {
                if (this.isPublicRoute(state.url)) this.router.navigate(['/']);
                return true;
            })
            .catch((error: string) => {
                if (this.isPublicRoute(state.url.split('?')[0])) return true;
                console.log(state.url.split('?'));
                this.router.navigate(['/auth/login']);
                return false;
            })
    }

    private isPublicRoute(url: string): boolean {
        for (let route of this.publicRoutes) {
            if (url.indexOf(route) == 0) {
                return true
            }
        }
        return false;
    }
}
