import { Component } from '@angular/core';

@Component({
  selector: 'app-library-homepage',
  templateUrl: './library-homepage.component.html',
  styleUrls: ['./library-homepage.component.scss']
})
export class LibraryHomepageComponent {
  sideBarOpen = true;
  ngOnInit() { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
