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
import { HttpClientModule } from '@angular/common/http';
import { StudentSidebarComponent } from './components/student/student-sidebar/student-sidebar.component';
import { TeacherSidebarComponent } from './components/teacher/teacher-sidebar/teacher-sidebar.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { AddClassComponent } from './components/teacher/add-class/add-class.component';
import { NgChartsModule } from 'ng2-charts';
import { UnderConstructionComponent } from './components/pages/under-construction/under-construction.component';
import { ManageStudentComponent } from './components/admin/manage-student/manage-student.component';
import { ManageTeacherComponent } from './components/admin/manage-teacher/manage-teacher.component';
import { LibraryDetailsComponent } from './components/admin/library-details/library-details.component';
import { UpdateProfileComponent } from './components/admin/update-profile/update-profile.component';
import { ViewProfileComponent } from './components/admin/view-profile/view-profile.component';
import { AddNewMemberComponent } from './components/admin/add-new-member/add-new-member.component';
import { DeleteMemberComponent } from './components/admin/delete-member/delete-member.component';
import { RecoverUserComponent } from './components/admin/recover-user/recover-user.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ViewBatchDetailsComponent } from './components/admin/view-batch-details/view-batch-details.component';
import { AllotEnrollmentNumberComponent } from './components/admin/allot-enrollment-number/allot-enrollment-number.component';
import { LibrarySidebarComponent } from './components/library/library-sidebar/library-sidebar.component';
import { LibraryHomepageComponent } from './components/library/library-homepage/library-homepage.component';
import { LibraryDashboardComponent } from './components/library/library-dashboard/library-dashboard.component';
import { ManageBooksComponent } from './components/library/manage-books/manage-books.component';
import { LibrarianProfileComponent } from './components/library/librarian-profile/librarian-profile.component';
import { SearchBookComponent } from './components/library/search-book/search-book.component';
import { IssueBookComponent } from './components/library/issue-book/issue-book.component';
import { ReturnBookComponent } from './components/library/return-book/return-book.component';
import { AvailbleBookComponent } from './components/library/availble-book/availble-book.component';
import { ShowNotReturnBookComponent } from './components/library/show-not-return-book/show-not-return-book.component';
import { MostBorrowBookComponent } from './components/library/most-borrow-book/most-borrow-book.component';
import { ViewStudentsComponent } from './components/library/view-students/view-students.component';
import { TeacherProfileComponent } from './components/teacher/teacher-profile/teacher-profile.component'
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { CreateBookComponent } from './components/library/create-book/create-book.component';
import { GetAllBooksComponent } from './components/library/get-all-books/get-all-books.component';
import { UpdateBookComponent } from './components/library/update-book/update-book.component';
import { DeleteBookComponent } from './components/library/delete-book/delete-book.component';
import { ManageBorrowingBooksComponent } from './components/library/manage-borrowing-books/manage-borrowing-books.component';
import { SendDueDateAlertComponent } from './components/library/send-due-date-alert/send-due-date-alert.component';
import { SendShortAttendenceAlertComponent } from './components/admin/send-short-attendence-alert/send-short-attendence-alert.component';

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
    AddClassComponent,
    UnderConstructionComponent,
    ManageStudentComponent,
    ManageTeacherComponent,
    SignupComponent,
    ViewBatchDetailsComponent,
    AllotEnrollmentNumberComponent,
    UnderConstructionComponent,
    LibraryDetailsComponent,
    UpdateProfileComponent,
    ViewProfileComponent,
    AddNewMemberComponent,
    DeleteMemberComponent,
    RecoverUserComponent,
    LibrarySidebarComponent,
    LibraryHomepageComponent,
    LibraryDashboardComponent,
    TeacherProfileComponent,
    ManageBooksComponent,
    LibrarianProfileComponent,
    SearchBookComponent,
    IssueBookComponent,
    ReturnBookComponent,
    AvailbleBookComponent,
    ShowNotReturnBookComponent,
    MostBorrowBookComponent,
    ViewStudentsComponent,
    CreateBookComponent,
    GetAllBooksComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    ManageBorrowingBooksComponent,
    SendDueDateAlertComponent,
    SendShortAttendenceAlertComponent
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
    HttpClientModule,
    NgChartsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
