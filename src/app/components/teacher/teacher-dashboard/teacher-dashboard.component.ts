import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { StudentandteacherService } from 'src/app/services/studentandteacher.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {
  data: any = {}
  public constructor(private authService: AuthService, private teacherService: StudentandteacherService, private snack: MatSnackBar) {
  }
  ngOnInit(): void {
    this.data = this.authService.getUserDetails();
    this.teacherService.getBatchesOfTeachers().subscribe({
      next: (data: any) => {
        this.classes = data
      },
      error: (error) => {
        this.snack.open(error.error.msg || "Server Error Please try later", "OK")
      }
    })
  }

  classes: any;
}
