import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { LandingpageComponent } from './components/pages/landingpage/landingpage.component';
import { StudentprofilepageComponent } from './components/student/studentprofilepage/studentprofilepage.component';
import { ResetpasswordComponent } from './components/pages/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/pages/forgotpassword/forgotpassword.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
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
import { TakeAttendanceComponent } from './components/teacher/take-attendance/take-attendance.component';
import { MatRadioModule } from '@angular/material/radio';
import { ModifyAttendanceComponent } from './components/teacher/modify-attendance/modify-attendance.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { StudentHomepageComponent } from './components/student/student-homepage/student-homepage.component';
import { TeacherHomepageComponent } from './components/teacher/teacher-homepage/teacher-homepage.component';
import { AdminHomepageComponent } from './components/admin/admin-homepage/admin-homepage.component';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import { StudentSidebarComponent } from './components/student/student-sidebar/student-sidebar.component';
import { TeacherSidebarComponent } from './components/teacher/teacher-sidebar/teacher-sidebar.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { AddClassComponent } from './components/teacher/add-class/add-class.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    StudentprofilepageComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
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
    TeacherDashboardComponent,
    AddClassComponent
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
    NgChartsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
