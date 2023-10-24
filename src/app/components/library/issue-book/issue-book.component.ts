import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';
import { BorrowBookService } from 'src/app/services/borrow-book.service';
import { TIME_ZONE } from 'src/app/services/helper';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.scss'],
})
export class IssueBookComponent {
  public constructor(
    private borrowService: BorrowBookService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  data = {
    studentId: '',
    bookId: '',
    issueDate: '',
    dueDate: '',
  };
  roles = ['Admin', 'Teacher', 'Student', 'Librarian'];
  branches = ['IT', 'EC', 'EE', 'CE', 'ME'];

  sendData() {
    if (
      !this.data.bookId.trim() ||
      !this.data.studentId.trim() ||
      !this.data.dueDate ||
      !this.data.issueDate
    ) {
      this.snack.open('Please Provide all the details', 'ÖK', {
        duration: 3000,
      });
      return;
    }

    this.data.issueDate = moment(this.data.issueDate)
      .tz(TIME_ZONE)
      .startOf('day')
      .format('YYYY-MM-DD');
    this.data.dueDate = moment(this.data.dueDate)
      .tz(TIME_ZONE)
      .startOf('day')
      .format('YYYY-MM-DD');

    this.borrowService.createBorrowBook(this.data).subscribe({
      next: (data) => {
        this.snack.open('Book borrowed Successfully!!', 'OK', {
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
