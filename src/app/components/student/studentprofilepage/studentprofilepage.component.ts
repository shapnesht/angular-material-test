import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-studentprofilepage',
  templateUrl: './studentprofilepage.component.html',
  styleUrls: ['./studentprofilepage.component.scss'],
})
export class StudentprofilepageComponent {
  user = {
    name: 'Ashi Parashar',
    branch: "IT",
    yearOfAdmission: 2020,
    email: "parasharashi02@gmail.com",
    role: "student",
    image: "../../assets/graduated.png"
  }

  public constructor(private authService:AuthService) {
    this.user.name = authService.getUserDetails().name
    this.user.email = authService.getUserDetails().email
    // this.user.yearOfAdmission = authService.getUserDetails().yearOfAdmission
    this.user.role = authService.getUserDetails().role
    // this.user.branch = authService.getUserDetails().branch
  }
};

