import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  email="";
  password="";
  errorMessage ='';
  error:{name:string,message:string}={name:'',message: ''};

  constructor(private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
  }

  clearErrorMessage()
  {
    this.errorMessage='';
    this.error = {name:'', message:''};
  }


  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email,this.password)){
        this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/adm'])
        }).catch((_error: { name: string; message: string; }) =>{
          this.error=_error
          this.router.navigate(['/login'])
        })
    }
  }
  
  validateForm(email: string, password: string):Boolean
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
  

  onLogout(){
    this.router.navigateByUrl("home");
  }

}
