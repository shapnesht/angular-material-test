import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AttendanceServiceService } from 'src/app/services/attendance-service.service';

@Component({
  selector: 'app-show-calendar',
  templateUrl: './show-calendar.component.html',
  styleUrls: ['./show-calendar.component.scss'],
})
export class ShowCalendarComponent implements OnInit {
  data = { date: '', subject: '' }
  selectedTime: any;

  public constructor(private snack: MatSnackBar, private _routerSnapshot: ActivatedRoute,
    private attendance: AttendanceServiceService) { }

  ngOnInit(): void {
    this.data.subject = this._routerSnapshot.snapshot.params['id']
  }

  subject = {
    name: "Theory Of Computation",
  }

  fetched = false

  fetchClasses() {
    if (!this.data.date || this.data.date === '') {
      this.snack.open("Please Select a valid date", "OK", { duration: 3000 });
      return
    }
    // this.data.date = new Date(this.data.date).toLocaleString('en-GB');
    console.log(this.data.date);
    
    this.attendance.getAttendanceByDate(this.data).subscribe({
      next: (tmp: any) => {
        this.attendances = tmp
      },
      error: err => this.snack.open(err.error.msg, "OK", {duration:3000})
    })
    this.fetched = true
  }

  takeNewAttendance() {
    if (!this.fetched) {
      this.snack.open("Please fetch classes first", "OK", { duration: 3000 })
      return
    }

  }

  attendances: any = {
    attendances: [
    ],
  };
}
