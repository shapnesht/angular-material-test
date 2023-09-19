import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent {
  user = {
    name: 'Ashi Parashar',
    branch: "IT",
    yearOfAdmission: 2020,
    email: "parasharashi02@gmail.com",
    role: "student",
    image: "../../assets/graduated.png"
  }
}
