import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuardGuard {
  public constructor(private router: Router, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      if (this.authService.isLoggedIn()) {
        if (this.authService.getUserRole() == "teacher") {
          return true
        } else if (this.authService.getUserRole() == "admin") {
          this.router.navigate(["/admin"])
          return false
        } else if (this.authService.getUserRole() == "student") {
          this.router.navigate(["/student"])
          return false
        } else if (this.authService.getUserRole() == "librarian") {
          this.router.navigate(["/library"])
          return false
        }
      }
    }
    this.router.navigate(["/login"])
    return false
  }

}
