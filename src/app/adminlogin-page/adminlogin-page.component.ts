import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeedetailComponent } from '../employeedetail/employeedetail.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-adminlogin-page',
  templateUrl: './adminlogin-page.component.html',
  styleUrls: ['./adminlogin-page.component.css']
})
export class AdminloginPageComponent implements OnInit {

  constructor(private authservice:AuthService) 
  { 
    this.authservice.user.subscribe(res =>{ //we take user id 29/7
      console.log(res);
      
    }
      )
   }
//    routes: Routes = [
    
//     { path: 'employeedetails', component: EmployeedetailComponent },
//     { path: 'employeelist', component: EmployeeListComponent },
//     {
//         path: 'admin', component: AdminloginPageComponent, children: [
            
//             { path: 'employeedetails', component: EmployeedetailComponent },
//             { path: 'employeelist', component: EmployeeListComponent }
//         ]
//     },
// ];

  ngOnInit(): void {
  }

}
