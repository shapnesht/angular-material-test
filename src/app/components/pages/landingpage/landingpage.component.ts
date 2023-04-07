import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
  constructor(private authService: AuthService, private router: Router) { }

  returnToHome() {
    this.router.navigate(['/admin'])
  }
  
  public isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}
