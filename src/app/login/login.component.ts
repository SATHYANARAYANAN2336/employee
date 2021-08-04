import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  passType: string = 'password';

  email="";
  confirmpassword="";
  password="";
  errorMessage ='';
  error:{name:string,message:string}={name:'',message: ''};

  constructor(private router:Router,private authservice:AuthService, private db:AngularFirestore) { }

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
        .then((result) => {
          console.log(result.user.uid);
          this.db.collection("Userdata", ref => ref.where("uid","==",result.user.uid)). //we used where query concept 
          get().toPromise().then(data =>
            {
              console.log(data);

              data.forEach(doc =>{
                console.log("admin",doc.data()['admin']);
                console.log("employee",doc.data()['employee']);
                console.log("superadmin",doc.data()['superadmin']);

                // if(doc.data()['admin']==true){
                  
                //   this.router.navigate(['/adm/employeelist']);
                // }
                // if(doc.data()['employee']==true){
                  
                //       this.router.navigate(['/adm/view/employeelist']);
                //      }
                // if(doc.data()['superadmin']==true){
                  
                //          this.router.navigate(['/adm/view/employeelist']);
                //          }


                
                // if(doc.data()['admin']==false) {
                    
                //     alert("Not Authorized");
                //     window.location.reload()
                //     // this.router.navigate(['']);
                // }                               
              })

              // data.forEach(doc1 =>{
              //   console.log(doc1.data()['employee']);
              //   if(doc1.data()['employee']==true){
                  
              //     this.router.navigate(['/adm/view/employeelist']);
              //   }
              //   if(doc1.data()['employee']==false) {
                    
              //       alert("Not Authorized");
                    
              //   }                               
              // })


              // data.forEach(doc1 =>{
              //   console.log(doc1.data()['superadmin']);
              //   if(doc1.data()['superadmin']==true){
                  
              //     this.router.navigate(['/adm/view/employeelist']);
              //   }
              //   if(doc1.data()['superadmin']==false) {
                    
              //       alert("Not Authorized");
                    
              //   }                               
              // })
              this.router.navigate(['/adm/employeelist'])
              
            } ) 
            
          // 
        }).catch((_error: { name: string; message: string; }) =>{
          this.error=_error
         
          // this.router.navigate([''])
          
        })
    }
  }

  changePasswordType(){
    if(this.passType== 'password'){
    this.passType= 'text'
    }else{
    this.passType= 'password'
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
