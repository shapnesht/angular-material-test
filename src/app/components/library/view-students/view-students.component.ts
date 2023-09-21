import { Component } from '@angular/core';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss'],
})
export class ViewStudentsComponent {
  printDiv(divName: string) {
    var printContents: any = document.getElementById(divName)?.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    window.location.reload();
  }
  data = {
    semester: '',
    branch: '',
  };

  students = {
    students: [
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Abhi',
        rollno: '0601IT201053',
        noOfCurrentissuebook: 5,
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        rollno: '0601IT201053',
        noOfCurrentissuebook: 1,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        rollno: '0601IT201053',
        noOfCurrentissuebook: 4,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Ayush',
        rollno: '0601IT201057',
        noOfCurrentissuebook: 4,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjana Thakur',
        rollno: '0601CE201053',
        noOfCurrentissuebook: 3,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Prajapat',
        rollno: '0601IT201036',
        noOfCurrentissuebook: 2,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Shapnesh Singh',
        rollno: '0601IT201060',
        noOfCurrentissuebook: 4,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Pradeep',
        rollno: '0601IT20103',
        noOfCurrentissuebook: 5,
      },
      {
        _id: '63e1eb773a1c19bbb3000085',
        name: 'Shubham',
        rollno: '0601IT201053',
        noOfCurrentissuebook: 3,
      },
    ],
  };
  semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  branches = ['IT', 'EC', 'EE', 'CE', 'ME'];
}
