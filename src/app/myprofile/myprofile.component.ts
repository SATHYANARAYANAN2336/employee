import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  id: any
 record: any={};
 
 constructor(public crud:CrudService,private authservice:AuthService,private route:ActivatedRoute,private AngularFirestore:AngularFirestore,private router:Router ) 
 {this.authservice.user.subscribe(res =>{ //we take user id 29/7
  console.log(res);
  
}
  ) }

  ngOnInit(): void {
     console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    
    // console.log(this.record.employeeid)
  this.AngularFirestore.collection("Employee").doc(this.id).get().toPromise().then((doc) => {
   this.record=doc.data();
   console.log(this.record.employeeid);
    console.log(doc.data());
    
  });
  


  
  }


  

}
