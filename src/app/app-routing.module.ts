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


const routes: Routes = [
  {
    path:'home' ,component:HomeComponent
  },
  {
    path:'dashboard' ,component:DashboardComponent
  },
  {
    path:'' , redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'landingpage' ,component:LandingpageComponent
  },
  {
    path:'studentprofilepage' ,component:StudentprofilepageComponent
  },
  {
    path:'resetpassword' ,component:ResetpasswordComponent
  },
  {
    path:'forgotpassword' ,component:ForgotpasswordComponent
  },
  {
    path:'temp' ,component:AdminDashboardComponent
  },
  {
    path:'temp1' ,component:StudentDashboardComponent
  },
  {
    path:'temp2' ,component:AddClassComponent
  },
  {
    path:'temp3' ,component:StudentAttendanceComponent
  },
  {
    path:'temp4' ,component:ShowCalendarComponent
  },
  {
    path:'take-attendance' ,component:TakeAttendanceComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
