import { Component } from '@angular/core';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent {
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
        writterName: 'Sanjay',
        issuedDate:'17032023',
      },
      {
        _id: '63e1eb623a1c19bbb3000081',
        name: 'CN',
        isbnno: '060606901053',
        writterName: 'Agam',
        issuedDate: '17032023',
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'AI',
        isbnno: '59685680959556',
        writterName: 'Ashi',
        issuedDate: '1702023',
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Aditi',
        issuedDate: '17032023',
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Aditi',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Amidh',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Piyush',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Pradeep',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Ravindra',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Sanjana',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Praful',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Praati',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Amit',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Anikate',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Sanket',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Sameer',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Aditi',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Hiran',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Harivanshray',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Abdul Kalam',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Raheem',
        issuedDate: '17032023',
      },{
        _id: '63e1eb773a1c19bbb3000084',
        name: 'OS',
        isbnno: '59680596985776',
        writterName: 'Aditi',
        issuedDate: '17032023',
      },
    ],
  };
}
