import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'employee';
  sidelist=[{url:'/admindashboard',name:'Dashboard',hide:true },{url:'/dashboard',name:'My Profile'},{url:'/employeedetails',name:'Add New Employee '},{url:'/employeelist',name:'Employee List'},
    {url:'/clientdetails',name:'Client Detail',hide:true},{url:'/adminattendance',name:'Attendance',hide:true},{url:'/adminleaves',name:'Leaves'},
    ]
}



