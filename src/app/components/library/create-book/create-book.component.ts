import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent {
  public constructor(
    private snack: MatSnackBar,
    private libraryService: LibraryService,
    private router: Router
  ) {}

  data = {
    title: '',
    isbn: '',
    author: '',
    quantity: 0,
  };

  createBook() {
    if (!this.data.title) {
      this.snack.open('Please enter title name', 'Ok', {
        duration: 3000,
      });
      return;
    }
    if (!this.data.isbn) {
      this.snack.open('Please enter isbn number', 'Ok', {
        duration: 3000,
      });
      return;
    }
    if (!this.data.author) {
      this.snack.open('Please enter author name', 'Ok', {
        duration: 3000,
      });
      return;
    }
    if (this.data.quantity < 0) {
      this.snack.open('Please enter valid quantity', 'Ok', {
        duration: 3000,
      });
      return;
    }

    this.libraryService.createBook(this.data).subscribe({
      next: (data) => {
        this.snack.open('Book created Successfully!!', 'Ok', {
          duration: 3000,
        });
        this.router.navigate(['/library']);
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
