import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent {
  data = {
    book: {
      title: '',
      author: '',
      quantity: 0,
      isbn: '',
      _id:''
    },
  };
  public constructor(
    private libraryService: LibraryService,
    private snack: MatSnackBar,
    private router:Router
  ) {}
  isActive = false;

  updateDetails() {
    if(!this.isActive) {
      this.snack.open('Please fetch Book Details first', 'Ok', {
        duration: 3000,
      });
      return;
    }
    if (this.data.book.title.trim() === '') {
      this.snack.open('Please enter Title', 'Ok', {
        duration: 3000,
      });
      return;
    }
    if (this.data.book.author.trim() === '') {
      this.snack.open('Please enter Author name', 'Ok', {
        duration: 3000,
      });
      return;
    }

    this.libraryService.updateBook(this.data.book._id, this.data.book).subscribe({
      next: (data: any) => {
        this.snack.open(
          'Book Updated Successfully!!',
          'OK',
          { duration: 3000 }
        ),
        this.router.navigate(["/library"])
      },
      error: (error) =>
        this.snack.open(
          error.error.msg || 'Server Error Please try later',
          'OK',
          { duration: 3000 }
        ),
    })
  }

  fetchDetails() {
    if (this.data.book.isbn.trim() === '') {
      this.snack.open('Please enter ISBN Number', 'Ok', {
        duration: 3000,
      });
      return;
    }

    this.libraryService.fetchByIsbn(this.data.book.isbn).subscribe({
      next: (data: any) => {
        this.data = data;
        this.isActive = true;
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
