import { Component } from '@angular/core';

@Component({
  selector: 'app-modify-attendance',
  templateUrl: './modify-attendance.component.html',
  styleUrls: ['./modify-attendance.component.scss'],
})
export class ModifyAttendanceComponent {
  selectedTime = null;
  data = {
    subject: '',
    semester: '',
    branch: '',
    students: [],
    year: new Date().getFullYear(),
    enrollment_number: '',
  };
  viewStudents = false;

  students = {
    students: [
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        isActive: true,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        isActive: true,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        isActive: true,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        isActive: true,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        isActive: true,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        isActive: true,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        isActive: true,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        isActive: true,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        isActive: true,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        isActive: true,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        isActive: true,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        isActive: true,
      },
    ],
  };

  semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  branches = ['IT', 'EC', 'EE', 'CE', 'ME'];
}
