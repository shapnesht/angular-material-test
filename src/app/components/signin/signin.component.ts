import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  loginData = {
    'email': '',
    'password': ''
  }

  public constructor(private authService: AuthService, private snack: MatSnackBar, private router: Router) { }

  login() {
    if (this.loginData.email == null || this.loginData.email.trim().length == 0) {
      this.snack.open("Please provide an valid email.", "OK", { duration: 3000 })
      return
    }
    if (this.loginData.password == null || this.loginData.password.trim().length == 0) {
      this.snack.open("Please enter the password.", "OK", { duration: 3000 })
      return
    }
    this.authService.login(this.loginData).subscribe({
      next: (data: any) => {
        if (data.user.role === "admin") this.router.navigate(["/admin"])
        if (data.user.role === "student") this.router.navigate(["/student"])
        if (data.user.role === "teacher") this.router.navigate(["/teacher"])
      },
      error: (error) => {
        console.log(error);
      }
    })
    console.log(this.authService.isLoggedIn());
  }
}
