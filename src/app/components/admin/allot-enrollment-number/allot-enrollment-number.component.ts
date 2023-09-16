import { Component } from '@angular/core';

@Component({
  selector: 'app-allot-enrollment-number',
  templateUrl: './allot-enrollment-number.component.html',
  styleUrls: ['./allot-enrollment-number.component.scss']
})
export class AllotEnrollmentNumberComponent {

  printDiv(divName: string) {
    var printContents: any = document.getElementById(divName)?.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    window.location.reload()
  }

  data = { year: '', branch: '' }
  years = [1, 2, 3, 4];
  branches = ['IT', 'EC', 'EE', 'CE', 'ME'];
  students = {
    students: [
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        enrollmentNumber: "0601IT201069"

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        enrollmentNumber: "0601IT201069"

      },
    ],
  };
}
