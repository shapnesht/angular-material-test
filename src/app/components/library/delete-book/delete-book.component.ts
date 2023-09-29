import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss'],
})
export class DeleteBookComponent {
  public constructor(
    private libraryService: LibraryService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  data = {
    book: {
      title: '',
      author: '',
      isbn: '',
    },
  };

  deleteBook() {
    if (this.data.book.isbn.trim() === '') {
      this.snack.open('Please enter ISBN Number', 'Ok', {
        duration: 3000,
      });
      return;
    }

    this.libraryService.fetchByIsbn(this.data.book.isbn).subscribe({
      next: (data: any) => {
        this.data = data;
        Swal.fire({
          title: 'Are you sure?',
          html: `You want to Delete <b>${data.book.title}</b> by <b>${data.book.author}</b>`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: 'red',
          cancelButtonColor: 'gray',
          confirmButtonText: 'Delete',
        }).then((result) => {
          if (result.isConfirmed) {
            this.libraryService.deleteBook(data.book._id).subscribe({
              next: (data) => {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              },
              error: (error) =>
                this.snack.open(
                  error.error.msg || 'Server Error Please try later',
                  'OK',
                  { duration: 3000 }
                ),
            });
          }
        });
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
