import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard {
  public constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      if (this.authService.getUserRole() == "admin") {
        return true
      } else if (this.authService.getUserRole() == "teacher") {
        this.router.navigate(["/teacher"])
        return false
      } else if (this.authService.getUserRole() == "student") {
        this.router.navigate(["/student"])
        return false
      }
    }
    this.router.navigate(["/login"])
    return false
  }

}
