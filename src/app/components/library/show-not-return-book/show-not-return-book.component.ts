import { Component } from '@angular/core';

@Component({
  selector: 'app-show-not-return-book',
  templateUrl: './show-not-return-book.component.html',
  styleUrls: ['./show-not-return-book.component.scss']
})
export class ShowNotReturnBookComponent {

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
        issuedTo: 'Sanjay',
        issuedDate:'17032023',
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'CN',
        isbnno: '060606901053',
        issuedTo: 'Agam',
        issuedDate: '17032023',
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'AI',
        isbnno: '59685680959556',
        issuedTo: 'Ashi',
        issuedDate: '1702023',
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        issuedTo: 'Aditi',
        issuedDate: '17032023',
      },
    ],
  };
}
