import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
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
