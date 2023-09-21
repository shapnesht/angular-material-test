import { Component } from '@angular/core';

@Component({
  selector: 'app-most-borrow-book',
  templateUrl: './most-borrow-book.component.html',
  styleUrls: ['./most-borrow-book.component.scss'],
})
export class MostBorrowBookComponent {
  printDiv(divName: string) {
    var printContents: any = document.getElementById(divName)?.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    window.location.reload();
  }
  books = {
    books: [
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'Toc',
        isbnno: '60869860565',
        noOftime: 19,
        writterName: 'Ashi',
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'CN',
        isbnno: '060606901053',
        noOftime: 10,
        writterName: 'Ankit',
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'AI',
        isbnno: '59685680959556',
        noOftime: 16,
        writterName: 'Aditi',
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        noOftime: 18,
        writterName: 'Amit',
      },
    ],
  };
}
