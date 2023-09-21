import { Component } from '@angular/core';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss'],
})
export class ReturnBookComponent {
  // data = {
  //   subject: '',
  //   semester: '',
  //   branch: '',
  //   students: [],
  //   year: new Date().getFullYear(),
  //   role: '',
  //   date: '',
  //   duedate: '',
  // };
  // roles = ['Admin', 'Teacher', 'Student', 'Librarian'];
  // branches = ['IT', 'EC', 'EE', 'CE', 'ME'];

  printDiv(divName: string) {
    var printContents: any = document.getElementById(divName)?.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    window.location.reload();
  }
  students = {
    students: [
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Toc',
        totalPresent: 6,
        totalClasses: 590,
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
    ],
  };
}
