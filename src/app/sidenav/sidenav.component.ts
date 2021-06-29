import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sidelist:any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.sidelist=[{url:'/admindashboard',name:'Dashboard',hide:true },{url:'/employeedetails',name:'Employee Detail'},{url:'/employeelist',name:'Employee List'},
    {url:'/clientdetails',name:'Client Detail',hide:true},{url:'/adminattendance',name:'Attendance',hide:true},{url:'/adminleaves',name:'Leaves'},
    {url:'/adminmyprofile',name:'My Profile'}]
  }


}
