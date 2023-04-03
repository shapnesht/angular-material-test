import { Component } from '@angular/core';

@Component({
  selector: 'app-student-homepage',
  templateUrl: './student-homepage.component.html',
  styleUrls: ['./student-homepage.component.scss']
})
export class StudentHomepageComponent {
  sideBarOpen = true;
  ngOnInit() { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
