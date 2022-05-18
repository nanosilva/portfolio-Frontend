import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {


  constructor(private autenticacionServicio: AuthenticationService, private routes:Router)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser=this.autenticacionServicio.isLoggedIn()
      if (currentUser){
        return true;
      }
      else{
        this.routes.navigate(['iniciar-sesion']);
        return false;
      }
    
  }
  
}
