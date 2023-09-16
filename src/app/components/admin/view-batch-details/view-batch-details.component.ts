import { Component } from '@angular/core';

@Component({
  selector: 'app-view-batch-details',
  templateUrl: './view-batch-details.component.html',
  styleUrls: ['./view-batch-details.component.scss']
})
export class ViewBatchDetailsComponent {
  data = { year: '', branch: '' }
  years = [1, 2, 3, 4];
  branches = ['IT', 'EC', 'EE', 'CE', 'ME'];
  students = {
    students: [
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Sanjay Poori',
        email: 'spg@gmail.com',

      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'Sattu Sahu',
        email: 'spg@gmail.com',

      },
    ],
  };
}
