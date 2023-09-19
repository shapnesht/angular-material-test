import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BatchService } from 'src/app/services/batch.service';
import { StudentandteacherService } from 'src/app/services/studentandteacher.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss'],
})
export class AddClassComponent {

  viewStudents = false;

  students: any = {
    students: [
    ],
  };

  fetchStudents() {
    if (this.data.subject.trim() === '') {
      this.snack.open("Please provide Subject Name", "OK", {
        duration: 3000
      })
      return
    }
    if (!this.data.branch) {
      this.snack.open("Please provide Branch Name", "OK", {
        duration: 3000
      })
      return
    }
    if (!this.data.semester) {
      this.snack.open("Please provide Semester", "OK", {
        duration: 3000
      })
      return
    }
    this.studentTeacherService.getStudentsByBatchAndBranch(this.data).subscribe({
      next: (data: any) => {
        this.students = data
        for (let i = 0; i < this.students.students.length; i++) {
          this.students.students[i].isActive = true
        }
      },
      error: (error) => this.snack.open(error.error.msg || "Server Error Please try later", "OK")
    })
  }

  createClass() {
    this.students.students.forEach((element: any) => {
      if (element.isActive) {
        this.data.students.push(element._id)
      }
    });

    if (this.students.students.length === 0) {
      this.snack.open("Please Load students first there are 0 students currently", "OK", { duration: 3000 })
      return
    }

    this.batchService.createbatch(this.data).subscribe({
      next: (data) => {
        this.snack.open("Batch created Successfully!!", "OK", { duration: 3000 })
        this.router.navigate(["/teacher"])
      },
      error: (error) => {
        this.data.students = []
        this.snack.open(error.error.msg || "Server Error Please try later", "OK")
      }
    })
  }

  data: any = {
    subject: '',
    semester: '',
    branch: '',
    students: [],
    year: moment().year()
  };

  semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  branches = ['IT', 'EC', 'EE', 'CE', 'ME'];

  ngOnInit(): void { }

  public constructor(private studentTeacherService: StudentandteacherService,
    private snack: MatSnackBar,
    private batchService: BatchService,
    private router: Router) { }
}
