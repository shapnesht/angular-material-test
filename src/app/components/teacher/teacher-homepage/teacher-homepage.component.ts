import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-teacher-homepage',
  templateUrl: './teacher-homepage.component.html',
  styleUrls: ['./teacher-homepage.component.scss']
})
export class TeacherHomepageComponent {
  title = 'shopworks';
  sideBarOpen = true;
  public constructor(private auth: AuthService) {
    console.log(auth.isLoggedIn());
  }
  ngOnInit() { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
