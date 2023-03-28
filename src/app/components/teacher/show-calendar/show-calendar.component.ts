import { Component } from '@angular/core';

@Component({
  selector: 'app-show-calendar',
  templateUrl: './show-calendar.component.html',
  styleUrls: ['./show-calendar.component.scss'],
})
export class ShowCalendarComponent {
  selected: any;
  selectedTime: any;

  subject={
    name:"Theory Of Computation",
  }

  attendances = {
    attendances: [
      {
        _id: '63e882e3b91524ec481ad570',
        date: '1/3/2023',
        time: '10:30:00 am',
        typeOfClass: 'Theory',
        subject: {
          _id: '63e24077ea3acbd4c6be0bb4',
          year: 2023,
          branch: 'IT',
          teacher: '63e1eb913a1c19bbb3000087',
          subject: 'TOC',
          students: ['63e1eb773a1c19bbb3000084', '63e1eb623a1c19bbb3000081'],
          noOfStudents: 2,
          __v: 0,
          updatedAt: '2023-02-12T06:10:56.305Z',
          attendance: [
            '63e882e3b91524ec481ad570',
            '63e882e8b91524ec481ad57b',
            '63e882efb91524ec481ad586',
          ],
        },
        students: [
          {
            student: '63e1eb773a1c19bbb3000084',
            status: 'present',
            _id: '63e882e3b91524ec481ad571',
          },
          {
            student: '63e1eb623a1c19bbb3000081',
            status: 'present',
            _id: '63e882e3b91524ec481ad572',
          },
        ],
      },
      {
        _id: '63e882e8b91524ec481ad57b',
        date: '1/3/2023',
        time: '11:30:00 am',
        typeOfClass: 'Theory',
        subject: {
          _id: '63e24077ea3acbd4c6be0bb4',
          year: 2023,
          branch: 'IT',
          teacher: '63e1eb913a1c19bbb3000087',
          subject: 'TOC',
          students: ['63e1eb773a1c19bbb3000084', '63e1eb623a1c19bbb3000081'],
          noOfStudents: 2,
          __v: 0,
          updatedAt: '2023-02-12T06:10:56.305Z',
          attendance: [
            '63e882e3b91524ec481ad570',
            '63e882e8b91524ec481ad57b',
            '63e882efb91524ec481ad586',
          ],
        },
        students: [
          {
            student: '63e1eb773a1c19bbb3000084',
            status: 'present',
            _id: '63e882e8b91524ec481ad57c',
          },
          {
            student: '63e1eb623a1c19bbb3000081',
            status: 'present',
            _id: '63e882e8b91524ec481ad57d',
          },
        ],
      },
      {
        _id: '63e882efb91524ec481ad586',
        date: '1/3/2023',
        time: '12:30:00 pm',
        typeOfClass: 'Theory',
        subject: {
          _id: '63e24077ea3acbd4c6be0bb4',
          year: 2023,
          branch: 'IT',
          teacher: '63e1eb913a1c19bbb3000087',
          subject: 'TOC',
          students: ['63e1eb773a1c19bbb3000084', '63e1eb623a1c19bbb3000081'],
          noOfStudents: 2,
          __v: 0,
          updatedAt: '2023-02-12T06:10:56.305Z',
          attendance: [
            '63e882e3b91524ec481ad570',
            '63e882e8b91524ec481ad57b',
            '63e882efb91524ec481ad586',
          ],
        },
        students: [
          {
            student: '63e1eb773a1c19bbb3000084',
            status: 'present',
            _id: '63e882efb91524ec481ad587',
          },
          {
            student: '63e1eb623a1c19bbb3000081',
            status: 'present',
            _id: '63e882efb91524ec481ad588',
          },
        ],
      },
    ],
  };
}
