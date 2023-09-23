import { Component } from '@angular/core';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent {
  data = {
    bookName: '',
    ISBN: '',
    author: '',
    quantity: '',
  }
}
