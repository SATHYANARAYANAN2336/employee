import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
 id: any
 record: any

  constructor(public crud:CrudService,private route:ActivatedRoute,private AngularFirestore:AngularFirestore,) 
  {console.log(this.route.snapshot.params.id)
    this.id=this.route.snapshot.params.id
    
  this.AngularFirestore.collection("Employee").doc(this.id).get().toPromise().then((doc) => {
    this.record=doc.data()
    console.log(doc.data())
  })
  console.log(this.record)
  }

  update()
  {
     
    console.log(this.record);
  this.crud.update(this.record.id,this.record).then((_res: any) =>{

    
    console.log(_res);
    alert("Employee data save done");
  }).catch((error: any) => {
    console.log(error);
  });

}

  
  

  ngOnInit(): void {
  }

}
