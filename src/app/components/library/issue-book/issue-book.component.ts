import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.scss'],
})
export class IssueBookComponent {
  data = {
    subject: '',
    semester: '',
    branch: '',
    students: [],
    year: new Date().getFullYear(),
    role: '',
    date: '',
    duedate: '',
  };
  roles = ['Admin', 'Teacher', 'Student', 'Librarian'];
  branches = ['IT', 'EC', 'EE', 'CE', 'ME'];
}
