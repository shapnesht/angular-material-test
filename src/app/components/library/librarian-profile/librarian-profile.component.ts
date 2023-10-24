import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-librarian-profile',
  templateUrl: './librarian-profile.component.html',
  styleUrls: ['./librarian-profile.component.scss'],
})
export class LibrarianProfileComponent {
  public constructor(
    private authService: AuthService,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe({
      next: (data: any) => {
        this.user = data.user;
      },
      error: (error) =>
        this.snack.open(
          error.error.msg || 'Server Error Please try later',
          'OK',
          { duration: 3000 }
        ),
    });
  }

  user = {
    name: 'Abhi Jain',
    yearOfAdmission: 2003,
    email: 'abhi02@gmail.com',
    role: 'Librariyan',
  };
}
