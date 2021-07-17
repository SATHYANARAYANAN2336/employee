import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  id: any
 record: any={};
 
  constructor(public crud:CrudService,private route:ActivatedRoute,private AngularFirestore:AngularFirestore,private router:Router ) 
  {
  }


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

  back()
  {
    this.router.navigateByUrl("/adm/employeelist");
  }

}


