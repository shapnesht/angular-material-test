import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BorrowBookService } from 'src/app/services/borrow-book.service';

@Component({
  selector: 'app-show-not-return-book',
  templateUrl: './show-not-return-book.component.html',
  styleUrls: ['./show-not-return-book.component.scss'],
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
  books: any = {
    books: [
      {
        name: 'Toc',
        isbnno: '60869860565',
        issuedTo: 'Shop',
        issuedDate: '15052023',
      },
      {
        name: 'Toc',
        isbnno: '60869860565',
        issuedTo: 'Shop',
        issuedDate: '15052023',
      },
      {
        name: 'Toc',
        isbnno: '60869860565',
        issuedTo: 'Shop',
        issuedDate: '15052023',
      },
      {
        name: 'Toc',
        isbnno: '60869860565',
        issuedTo: 'Shop',
        issuedDate: '15052023',
      },
    ],
  };

  public constructor(
    private borrowService: BorrowBookService,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.borrowService.showNotReturnBooks().subscribe({
      next: (data: any) => {
        this.books = data;
      },
      error: (error) =>
        this.snack.open(
          error.error.msg || 'Server Error Please try later',
          'OK',
          { duration: 3000 }
        ),
    });
  }
}
