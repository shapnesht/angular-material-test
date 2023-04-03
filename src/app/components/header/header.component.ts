import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  public isLoggedIn() {
    return false
  }

  public logout() {
    this.authService.logout()
  }

}
