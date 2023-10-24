import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-availble-book',
  templateUrl: './availble-book.component.html',
  styleUrls: ['./availble-book.component.scss']
})
export class AvailbleBookComponent {
  printDiv(divName: string) {
    var printContents: any = document.getElementById(divName)?.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

    window.location.reload();
  }
  books: any = {};
  public constructor(
    private libraryService: LibraryService,
    private snack: MatSnackBar
  ) {}
  fetchAvailbleBooks(){
    this.libraryService.getAllAvailbleBook().subscribe({
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
  ngOnInit() {
    this.fetchAvailbleBooks();
  }
}
