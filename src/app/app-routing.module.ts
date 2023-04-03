import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StudentprofilepageComponent } from './studentprofilepage/studentprofilepage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { AddClassComponent } from './components/admin/add-class/add-class.component';

import { StudentAttendanceComponent } from './components/teacher/student-attendance/student-attendance.component';
import { ShowCalendarComponent } from './components/teacher/show-calendar/show-calendar.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { TeacherHomepageComponent } from './components/teacher/teacher-homepage/teacher-homepage.component';
import { StudentHomepageComponent } from './components/student/student-homepage/student-homepage.component';


const routes: Routes = [
  {
    path:'' , component:LandingpageComponent
  },
  {
    path:'login' , component:SigninComponent
  },
  {
    path:'admin' , component:AdminHomepageComponent
  },
  {
    path:'teacher' , component:TeacherHomepageComponent
  },
  {
    path:'student' , component:StudentHomepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
