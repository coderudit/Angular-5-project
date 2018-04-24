import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class Middleware implements CanActivate {
    constructor(private router: Router) {}
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const login = localStorage.getItem('token');
        if (login) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
