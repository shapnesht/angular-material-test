import { Component } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent {
  data = {
    subject: '',
    semester: '',
    branch: '',
    students: [],
    year: new Date().getFullYear(),
    role:'',
  };
  roles = ['Admin', 'Teacher', 'Student', 'Librarian', ];
  branches = ['IT', 'EC', 'EE', 'CE', 'ME'];
}
