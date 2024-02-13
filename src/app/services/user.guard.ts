import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  UserGuard implements CanActivate {

  constructor(private  login:LoginService, private router: Router)
   {

   }

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): 
    
    Observable<boolean 
    | UrlTree> 
    | Promise<boolean 
    | UrlTree> 
    | boolean 
    | UrlTree {
      console.log('UserGuard: Checking access...');
     if(this.login.isLoggedIn() && this.login.getUserRole()==='General USER'){
      console.log('UserGuard: Access granted.');
      return true;
     }
     console.log('UserGuard: Access denied. Redirecting to login...');
    //navigation without reloading
       this.router.navigate(['login']);
      return false;
     
  }
}

