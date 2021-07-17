import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TlLoginComponent } from './login/tl-login/tl-login.component';
import { DeveloperLoginComponent } from './login/developer-login/developer-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { LeavesComponent } from './pages/leaves/leaves.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DeveloperloginPageComponent } from './developerlogin-page/developerlogin-page.component';
import { AdminloginPageComponent } from './adminlogin-page/adminlogin-page.component';
import { TLloginPageComponent } from './tllogin-page/tllogin-page.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
import { InformationBankComponent } from './information-bank/information-bank.component';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomesComponent } from './homes/homes.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { CrudService } from './service/crud.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    TlLoginComponent,
    DeveloperLoginComponent,
    DashboardComponent,
    AttendanceComponent,
    LeavesComponent,
    MyprofileComponent,
    SidenavComponent,
    DeveloperloginPageComponent,
    AdminloginPageComponent,
    TLloginPageComponent,
    EmployeedetailComponent,
    ClientdetailComponent,
    InformationBankComponent,
    HomesComponent,
    EmployeeListComponent,
    EditemployeeComponent,
    UserinfoComponent,
    ViewemployeeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    GoogleChartsModule,
    
    ],
  exports: [SidenavComponent],

  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
