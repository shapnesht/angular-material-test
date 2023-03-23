import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent {
  name: string = 'ashi';

  classes = {
    batches: [
      {
        _id: '63e24077ea3acbd4c6be0bb4',
        subject: 'TOC',
        noOfStudents: 2,
      },
      {
        _id: '63e24077ea3acbd4c6be0bb4',
        subject: 'TOC',
        noOfStudents: 2,
      },
      {
        _id: '63e24077ea3acbd4c6be0bb4',
        subject: 'TOC',
        noOfStudents: 2,
      },
    ],
  };
}
