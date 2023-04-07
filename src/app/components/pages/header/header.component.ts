import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void { }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  public isLoggedIn() {
    return this.authService.isLoggedIn()
  }

  public logout() {
    this.authService.logout().subscribe({
      next:(data)=>{
        localStorage.removeItem("user");
        this.router.navigate(["/"])
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
