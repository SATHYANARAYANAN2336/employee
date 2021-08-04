import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sidelist:any[]=[];
  data:any;
  opened=false;

  constructor(private authservice:AuthService) 
  {
    this.authservice.user.subscribe(res =>{ //we take user id 29/7
    console.log(res);
    this.data=res;
    console.log(this.data);
    

    
  }
    ) }

  ngOnInit(): void {
    this.sidelist=[{url:'/admindashboard',name:'Dashboard',hide:true },{url:'/adm/dashboard',name:'Dashboard',hide:true},
    {url:'/adm/employeedetails',name:'Add NewEmployee '},{url:'/adm/employeelist',name:'Employee List'},
    {url:'/clientdetails',name:'Client Detail',hide:true},{url:'/adminattendance',name:'Attendance',hide:true},
    {url:'/adminleaves',name:'Leaves',hide:true}]

    //{url:'/adm/myprofile',name:'My-Profile'},
  }


}
