import { Component } from '@angular/core';

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
    image:"../../assets/graduated.png"
  }
  };

