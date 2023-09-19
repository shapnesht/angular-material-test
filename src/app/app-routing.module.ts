import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';
import { StudentprofilepageComponent } from './components/student/studentprofilepage/studentprofilepage.component';
import { ResetpasswordComponent } from './components/pages/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';

import { StudentAttendanceComponent } from './components/teacher/student-attendance/student-attendance.component';
import { ShowCalendarComponent } from './components/teacher/show-calendar/show-calendar.component';
import { TakeAttendanceComponent } from './components/teacher/take-attendance/take-attendance.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { TeacherHomepageComponent } from './components/teacher/teacher-homepage/teacher-homepage.component';
import { StudentHomepageComponent } from './components/student/student-homepage/student-homepage.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { TeacherGuardGuard } from './guards/teacher-guard.guard';
import { StudentGuardGuard } from './guards/student-guard.guard';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { UnderConstructionComponent } from './components/pages/under-construction/under-construction.component';
import { AddClassComponent } from './components/teacher/add-class/add-class.component';
import { ManageStudentComponent } from './components/admin/manage-student/manage-student.component';
import { ManageTeacherComponent } from './components/admin/manage-teacher/manage-teacher.component';


const routes: Routes = [
  {
    path: '', component: LandingpageComponent
  },
  {
    path: 'login', component: SigninComponent
  },
  {
    path: 'admin', component: AdminHomepageComponent,
    canActivate: [AdminGuardGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'manage-student',
        component: ManageStudentComponent
      },
      {
        path: 'manage-teacher',
        component: ManageTeacherComponent
      },
      

    ]
  },
  {
    path: 'teacher', component: TeacherHomepageComponent,
    canActivate: [TeacherGuardGuard],
    children: [
      {
        path: '',
        component: TeacherDashboardComponent
      },
      {
        path: 'add-class',
        component: AddClassComponent
      },
      {
        path: 'classes/:id',
        component: ShowCalendarComponent
      },
      {
        path: 'stats/:id',
        component: StudentAttendanceComponent
      },
      {
        path: 'attendance/:id',
        component: TakeAttendanceComponent
      },
    ]
  },
  {
    path: 'student', component: StudentHomepageComponent,
    canActivate: [StudentGuardGuard],
    children: [
      {
        path: '',
        component: StudentDashboardComponent
      },
      {
        path: 'profile',
        component: StudentprofilepageComponent
      },

    ]
  },
  {
    path: 'library',
    component: UnderConstructionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
