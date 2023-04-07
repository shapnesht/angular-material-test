import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent {
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
