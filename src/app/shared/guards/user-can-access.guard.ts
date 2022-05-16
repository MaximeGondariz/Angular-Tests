import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCanAccessGuard implements CanActivate, CanActivateChild {

  userIsLogged = true;

  user = {
    name: 'coco',
    roles: ['ADMIN']
  }

  constructor(
    private router: Router
  ) {}

  canActivateChild(): boolean|Promise<boolean> {
    console.log("UserCanAccessGuard", this.userIsLogged);
    if (this.userIsLogged && this.user.roles.includes('ADMIN')) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(true);
        }, 3000);
      });
    }
    return false;
  }
  
  canActivate(): boolean|Promise<boolean> {
    console.log("UserCanAccessGuard", this.userIsLogged);

    if (!this.userIsLogged) {
      this.router.navigateByUrl('/two');
    }
    
    return this.userIsLogged;
  }
  
}