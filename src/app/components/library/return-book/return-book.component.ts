import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BorrowBookService } from 'src/app/services/borrow-book.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss'],
})
export class ReturnBookComponent {
  // data = {
  //   subject: '',
  //   semester: '',
  //   branch: '',
  //   students: [],
  //   year: new Date().getFullYear(),
  //   role: '',  //   date: '',
  //   duedate: '',
  // };
  // roles = ['Admin', 'Teacher', 'Student', 'Librarian'];
  // branches = ['IT', 'EC', 'EE', 'CE', 'ME'];
  data = {
    studentId: '',
  };
  printDiv(divName: string) {
    var printContents: any = document.getElementById(divName)?.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    window.location.reload();
  }
  books: any = {};

  fetched = false;

  public constructor(
    private borrowService: BorrowBookService,
    private snack: MatSnackBar
  ) {}

  fetchData() {
    if (!this.data.studentId) {
      this.snack.open('Please Provide all the details', 'ÖK', {
        duration: 3000,
      });
      return;
    }
    this.fetched = false;
    this.books = {};

    this.borrowService.getStudentBookHistory(this.data).subscribe({
      next: (data: any) => {
        this.books = data;
        this.fetched = true;
      },
      error: (error) =>
        this.snack.open(
          error.error.msg || 'Server Error Please try later',
          'OK',
          { duration: 3000 }
        ),
    });
  }

  returnBook(id: any) {
    if (!this.data.studentId) {
      this.snack.open('Please Provide all the details', 'ÖK', {
        duration: 3000,
      });
      return;
    }

    this.borrowService.returnBook(id, this.data).subscribe({
      next: (data: any) => {
        this.books = data;
        this.fetched = true;
        this.fetchData();
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
