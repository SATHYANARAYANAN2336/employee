import { UserinfoComponent } from './userinfo/userinfo.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { TlLoginComponent } from './login/tl-login/tl-login.component';
import { DeveloperLoginComponent } from './login/developer-login/developer-login.component';
import { AdminloginPageComponent } from './adminlogin-page/adminlogin-page.component';
import { TLloginPageComponent} from './tllogin-page/tllogin-page.component';
import { DeveloperloginPageComponent } from './developerlogin-page/developerlogin-page.component';
import { DashboardComponent } from'./pages/dashboard/dashboard.component';

import { AttendanceComponent } from './pages/attendance/attendance.component';
import { LeavesComponent } from './pages/leaves/leaves.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'tllogin',
    component:TlLoginComponent
  },
  {
    path:'developerLogin',
    component:DeveloperLoginComponent
  },
  {
    path: 'adm',
    component:SidenavComponent,children:[  {
      path:'employeedetails',
      component: EmployeedetailComponent,
    },
    {
      path:'dashboard',
      component: DashboardComponent,
    },
    {
      path:'employeelist',
      component:EmployeeListComponent
    },
    {
      path:'edit/:id',
      component:EditemployeeComponent
    },
    {
      path:'view/:id',
      component:ViewemployeeComponent
    },
    {
      path:'myprofile',
      component:MyprofileComponent
    }
    ]
  },
  {
    path:'dlm',
    component:DeveloperloginPageComponent
  },
  {
    path:'tlm',
    component:TLloginPageComponent
  },
  {
    path:'admindashboard',
    component: DashboardComponent
  },
  {
    path:'adminattendance',
    component: AttendanceComponent
   },
  {
    path:'adminleaves',
    component: LeavesComponent
  },
  

  {
    path:'clientdetails',
    component: ClientdetailComponent
  },
  
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  
  {
    path:'back',
    component:EmployeedetailComponent
  },
  {
    path:'userinfo',
    component:UserinfoComponent
  },
  {
    path: 'cancel',
    component:AdminloginPageComponent
  },
  {
    path:'main',
    component:MainComponent
  }
  

  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

