import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StudentprofilepageComponent } from './studentprofilepage/studentprofilepage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
