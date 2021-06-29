import { AuthService } from './../service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { CrudService } from './../service/crud.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  

  [x: string]: any;
   record={employeeid:"",employeename:"",reporting:"",dob:"",company:"",department:"",
  designation:"",bloodgroup:"",email:"",address:"",mobile:"",employeetype:"",gender:"",
  bankname:"",employeegrade:"",accountname:"",insurance:"",ifsc:"",pf:"",pan:"",
  paymenttype:"",esi:"",leaving:"",emergencycontactname:"",emergencycontactmobile:"",
  emergencycontactemail:"",emergencycontactaddress:"",id:"",worktype:""}
  

  
  
  empdata:boolean=true;
  constructor(private router:Router,public crud:CrudService,private AngularFirestore:AngularFirestore,private authservice:AuthService) {this.record.id=this.AngularFirestore.createId()}
  
  
  
  


  createrecord()
  {
     
      console.log(this.record);
    this.crud.create_Newemployee(this.record.id,this.record).then((_res: any) =>{

      
      console.log(_res);
      alert("Employee data save done");
    }).catch((error: any) => {
      console.log(error);
    });
  
  }

  



  ngOnInit(): void {
    this.div1Function();
    
  }

  
  div1Function(){
    this.empdata=true;
    
  }

  
 
  

}
