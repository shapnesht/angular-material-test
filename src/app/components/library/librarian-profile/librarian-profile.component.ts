import { Component } from '@angular/core';

@Component({
  selector: 'app-librarian-profile',
  templateUrl: './librarian-profile.component.html',
  styleUrls: ['./librarian-profile.component.scss']
})
export class LibrarianProfileComponent {
  user = {
    name: 'Abhi Jain',
    yearOfJoining: 2003,
    email: "abhi02@gmail.com",
    role: "Librariyan",
    image: "../../assets/graduated.png"
  }
}
