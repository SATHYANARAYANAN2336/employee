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
    this.sidelist=[{url:'/admindashboard',name:'Dashboard',hide:true },{url:'/adm/dashboard',name:'Dashboard',hide:true},{url:'/adm/employeedetails',name:'Add NewEmployee '},{url:'/adm/employeelist',name:'Employee List'},
    {url:'/clientdetails',name:'Client Detail',hide:true},{url:'/adminattendance',name:'Attendance',hide:true},{url:'/adminleaves',name:'Leaves',hide:true}
    ]
  }


}
