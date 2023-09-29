import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss'],
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
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
    ],
  };
  filteredBooks = {
    books: [
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
      {
        _id: '63e1eb773a1c19bbb3000084',
        title: 'Dummy',
        isbn: '0',
        author: 'Author',
        quantity: 0,
      },
    ],
  };

  filterBooks = () => {
    this.filteredBooks.books = this.books.books.filter((book) => {
      return (
        book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.isbn.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  };

  searchTerm = '';

  public constructor(
    private libraryService: LibraryService,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.libraryService.getAllBooks().subscribe({
      next: (data: any) => {
        this.books.books = data.books;
        this.filteredBooks.books = data.books;
      },
      error: (error) =>
        this.snack.open(
          error.error.msg || 'Server Error Please try later',
          'OK'
        ),
    });
  }
}
