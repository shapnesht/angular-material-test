import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.scss']
})
export class AddNewMemberComponent {
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
