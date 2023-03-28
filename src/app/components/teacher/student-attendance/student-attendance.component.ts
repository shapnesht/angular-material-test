import { Component } from '@angular/core';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss'],
})
export class StudentAttendanceComponent {
  printDiv(divName: string) {
    var printContents:any = document.getElementById(divName)?.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    window.location.reload()
  }
  students = {
    students: [
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        totalPresent: 49,
        totalClasses: 149,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        totalPresent: 49,
        totalClasses: 149,
      },
    ],
  };
}
