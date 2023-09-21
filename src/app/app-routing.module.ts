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
import { ViewBatchDetailsComponent } from './components/admin/view-batch-details/view-batch-details.component';
import { AllotEnrollmentNumberComponent } from './components/admin/allot-enrollment-number/allot-enrollment-number.component';
import { LibraryDetailsComponent } from './components/admin/library-details/library-details.component';
import { UpdateProfileComponent } from './components/admin/update-profile/update-profile.component';
import { ViewProfileComponent } from './components/admin/view-profile/view-profile.component';
import { AddNewMemberComponent } from './components/admin/add-new-member/add-new-member.component';
import { DeleteMemberComponent } from './components/admin/delete-member/delete-member.component';
import { RecoverUserComponent } from './components/admin/recover-user/recover-user.component';
import { LibraryHomepageComponent } from './components/library/library-homepage/library-homepage.component';
import { LibraryDashboardComponent } from './components/library/library-dashboard/library-dashboard.component';
import { ManageBooksComponent } from './components/library/manage-books/manage-books.component';
import { LibrarianProfileComponent } from './components/library/librarian-profile/librarian-profile.component';
import { SearchBookComponent } from './components/library/search-book/search-book.component';
import { IssueBookComponent } from './components/library/issue-book/issue-book.component';
import { AvailbleBookComponent } from './components/library/availble-book/availble-book.component';
import { ReturnBookComponent } from './components/library/return-book/return-book.component';
import { ShowNotReturnBookComponent } from './components/library/show-not-return-book/show-not-return-book.component';
import { MostBorrowBookComponent } from './components/library/most-borrow-book/most-borrow-book.component';
import { ViewStudentsComponent } from './components/library/view-students/view-students.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'admin',
    component: AdminHomepageComponent,
    canActivate: [AdminGuardGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
      },
      {
        path: 'view-batch',
        component: ViewBatchDetailsComponent,
      },
      {
        path: 'allot-enrollment-number',
        component: AllotEnrollmentNumberComponent,
      },
      {
        path: 'libraryAdmin',
        component: LibraryDetailsComponent,
      },
      {
        path: 'updateProfile',
        component: UpdateProfileComponent,
      },
      {
        path: 'viewProfile',
        component: ViewProfileComponent,
      },
      {
        path: 'addNewMember',
        component: AddNewMemberComponent,
      },
      {
        path: 'deleteMember',
        component: DeleteMemberComponent,
      },
      {
        path: 'recoverUser',
        component: RecoverUserComponent,
      },
    ],
  },
  {
    path: 'teacher',
    component: TeacherHomepageComponent,
    canActivate: [TeacherGuardGuard],
    children: [
      {
        path: '',
        component: TeacherDashboardComponent,
      },
      {
        path: 'add-class',
        component: AddClassComponent,
      },
      {
        path: 'classes/:id',
        component: ShowCalendarComponent,
      },
      {
        path: 'stats/:id',
        component: StudentAttendanceComponent,
      },
      {
        path: 'attendance/:id',
        component: TakeAttendanceComponent,
      },
    ],
  },
  {
    path: 'student',
    component: StudentHomepageComponent,
    canActivate: [StudentGuardGuard],
    children: [
      {
        path: '',
        component: StudentDashboardComponent,
      },
      {
        path: 'profile',
        component: StudentprofilepageComponent,
      },
    ],
  },
  {
    path: 'library',
    component: LibraryHomepageComponent,
    children: [
      {
        path: '',
        component: LibraryDashboardComponent,
      },
      {
        path: 'manageBooks',
        component: ManageBooksComponent,
      },
      {
        path: 'myprofile',
        component: LibrarianProfileComponent,
      },
      {
        path: 'searchbook',
        component: SearchBookComponent,
      },
      {
        path: 'issue-book',
        component: IssueBookComponent,
      },
      {
        path: 'availble-book',
        component: AvailbleBookComponent,
      },
      {
        path: 'return-book',
        component: ReturnBookComponent,
      },
      {
        path: 'showNotReturnBook',
        component: ShowNotReturnBookComponent,
      },
      {
        path: 'mostBorrowBooks',
        component: MostBorrowBookComponent,
      },
      {
        path: 'view-students',
        component: ViewStudentsComponent,
      },
    ],
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetpasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
