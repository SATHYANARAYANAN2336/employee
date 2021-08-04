import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  [x: string]: any;
  pass_msg: any;
  match_msg: any;
  uid="";
  id="";
  email="";
  item:any;
  password="";
  confirmpassword="";
  array:any = [];
  match_valid:Boolean=false;
  password_valid:Boolean=false;
  mobile="";
  message!: '';
  errorMessage ='';
  error:{name:string,message:string}={name:'',message: ''};

  constructor(private router:Router,private authservice:AuthService,private db:AngularFirestore) { 
    this.db.collection('Userdata').get().toPromise().then( snap => {
      console.log(snap);
      
      snap.forEach( doc => {
        console.log(doc.id);
        
        this.array.push(doc.data())
      })
    console.log(this.array);
    
      })
      
      }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
    

  
  registration()
  {
    this.clearErrorMessage();
    if(this.validateForm(this.email,this.confirmpassword)){
        this.authservice.registrationWithEmail(this.email, this.confirmpassword)
        
        .then((res) => {
          console.log(res.user.uid);

          let id=this.db.createId()
          const userdata={name:this.name,email:this.email,mobile:this.mobile,id:id,uid:res.user.uid}
   
          this.db.collection('Userdata').doc(id).set(userdata);
       
     
      
        }).catch(_error =>{
          this.error=_error
          console.log(this.error);
          this.router.navigate([''])
           
        })
    
    }
  }

  

  onChangeEvent(event: any){
    let match=this.array.some((item: { email: any; }) =>
      item.email===event.target.value)
      console.log(match);

    console.log(event.target.value);

    if(match)
    {
      this.match_valid=true;
      console.log();
      
      return this.match_msg="Already there is an existing account";
    }
    else
    {
      this.match_valid=false;
      console.log();
      return this.match_msg="create new account";
    }

  }

  confpass(pass: any)
  {
    // console.log(pass);
    // console.log(this.password);
    // console.log(this.password===pass);

    console.log(pass);
    if(this.password===pass)
    { 
      this.password_valid=true;
      return this.pass_msg = "Password Matched";   
    }
    else(this.password!==pass)
    {
      this.password_valid=false;
      return this.pass_msg = "Password MisMatched"; 
    }
    alert("Registration completed Successfully!!!");

  }

  clearErrorMessage()
  {
    this.errorMessage='';
    this.error = {name:'', message:''};
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
    this.router.navigateByUrl("");
  }

}


