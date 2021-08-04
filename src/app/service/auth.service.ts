import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState:any=null;
  user;
  
    constructor(private afu:AngularFireAuth,private db:AngularFirestore,private router:Router) {
    this.afu.authState.subscribe(auth =>{
      this.authState=auth;
    })
    this.user=this.afu.authState.pipe(
      switchMap(user =>
        {
          if(user){
            console.log(user.uid)
            return this.db.collection("Userdata", ref => ref.where("uid","==",user.uid)).valueChanges()//valuechange means if there is any change or update it will change
            
          }
          else{
            return of(null);
          }
        })
    )
  }
  
//  all firebase getdata functions

  get isUserAnonymousLoggedIn():boolean {
    return(this.authState!=null) ? this.authState.isAnonymous:false 
  }

  get currentUserId():string {
    return(this.authState !==null) ? this.authState.uid:''
} 

  get currentUserName():string {
    return this.authState['email']
  } 
  
  get currentUser(): any{
    return (this.authState !==null) ? this.authState : null;
  }
  
  get isUserEmailLoggedIn(): boolean{
    if((this.authState!==null) && (this.isUserAnonymousLoggedIn)){
      return true
    } else {
      return false
    }
  }

  
  
  async registrationWithEmail(email:string, confirmpassword:string) {
      return this.afu.createUserWithEmailAndPassword(email, confirmpassword)
      .then((user) => {
      this.authState = user
      console.log(user);
      return user
      })
     .catch (error => {
      // console.log(error)
      throw error
    });
  }



  async loginWithEmail(email:string, password:string){
    return this.afu.signInWithEmailAndPassword(email,password)
    .then((user)=> {
      this.authState=user
      return user;
    })    
    .catch(error=> {
        console.log(error)
        throw error
        
      });
  }
  signout():void
  {
    this.afu.signOut();
    this.router.navigate(['/login']);
  }
  
}
