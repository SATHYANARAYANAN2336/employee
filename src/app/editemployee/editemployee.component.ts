import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
 id: any;
 record: any={};

  constructor(public crud:CrudService,private route:ActivatedRoute,private AngularFirestore:AngularFirestore,private router:Router) 
  {
  }

  update()
  {
     
    console.log(this.record);
  this.crud.update(this.record.id,this.record).then((_res: any) =>{

    
    // console.log(_res);
    alert("Employee data save done");
    this.router.navigateByUrl("/adm/employeelist");
  }).catch((error: any) => {
    console.log(error);
  });

}

  
  

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    this.AngularFirestore.collection("Employee").doc(this.id).get().toPromise().then((result) => {
    this.record=result.data();
    console.log(this.record.employeeid);
    // console.log(doc.data());
  });
  
  }

}
