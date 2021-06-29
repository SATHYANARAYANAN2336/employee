import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;

  email="";
  password="";
  mobile="";
  message!: '';
  errorMessage ='';
  error:{name:string,message:string}={name:'',message: ''};

  constructor(private router:Router,private authservice:AuthService,private db:AngularFirestore) { }

  ngOnInit(): void {
  }

  clearErrorMessage()
  {
    this.errorMessage='';
    this.error = {name:'', message:''};
  }

  registration()
  {
    this.clearErrorMessage();
    if(this.validateForm(this.email,this.password)){
        this.authservice.registrationWithEmail(this.email, this.password)
        .then((_res: any) => {
          const userdata={name:this.name,email:this.email,mobile:this.mobile}
          let id=this.db.createId()
          this.db.collection('Userdata').doc(id).set(userdata);
          this.Message = "You are register with data on firebase"
          console.log(_res);
      alert("Registration completed Successfully!!!");
        }).catch(_error =>{
          this.error=_error
          this.router.navigate(['/registration'])
        })
    
    }
  }

  validateForm(email: string,password: string)
  {
    if(email.length === 0)
    {
      this.errorMessage="Please enter email id";
      return false;
    }
    if(password.length === 0)
    {
      this.errorMessage="Please enter password";
      return false;
    }
    if(password.length < 6)
    {
      this.errorMessage="Password should be atleast 6 char";
      return false;
    }
    this.errorMessage='';
    return true;
  }


   
  onLogout()
  {
    this.router.navigateByUrl("home");
  }
}
