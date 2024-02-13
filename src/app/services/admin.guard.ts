import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

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
    
     if(this.login.isLoggedIn() && this.login.getUserRole()=='ADMIN'){
      return true;
     }
      
    //navigation without reloading
       this.router.navigate(['login']);
      return false;
     
  }
}
