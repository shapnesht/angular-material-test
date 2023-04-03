import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StudentprofilepageComponent } from './studentprofilepage/studentprofilepage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { AddClassComponent } from './components/admin/add-class/add-class.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StudentAttendanceComponent } from './components/teacher/student-attendance/student-attendance.component';
import { ShowCalendarComponent } from './components/teacher/show-calendar/show-calendar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { MatRadioModule } from '@angular/material/radio';
import { ModifyAttendanceComponent } from './components/teacher/modify-attendance/modify-attendance.component';
import { SigninComponent } from './components/signin/signin.component';
import { StudentHomepageComponent } from './components/student/student-homepage/student-homepage.component';
import { TeacherHomepageComponent } from './components/teacher/teacher-homepage/teacher-homepage.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { CookieModule } from 'ngx-cookie';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentSidebarComponent } from './components/student/student-sidebar/student-sidebar.component';
import { TeacherSidebarComponent } from './components/teacher/teacher-sidebar/teacher-sidebar.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    LandingpageComponent,
    StudentprofilepageComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    AddClassComponent,
    TakeAttendanceComponent,
    ShowCalendarComponent,
    StudentAttendanceComponent,
    ModifyAttendanceComponent,
    SigninComponent,
    StudentHomepageComponent,
    TeacherHomepageComponent,
    AdminHomepageComponent,
    StudentSidebarComponent,
    TeacherSidebarComponent,
    AdminSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    MatInputModule,
    MatCardModule,
    CookieModule.withOptions(),
    HttpClientModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
