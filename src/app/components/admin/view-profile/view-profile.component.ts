import { Component } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent {
  user = {
    name: 'Ashi Parashar',
    branch: "IT",
    yearOfAdmission: 2020,
    email: "parasharashi02@gmail.com",
    role: "student",
    image: "../../assets/graduated.png"
  }
}
