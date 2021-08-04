import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
 id: any;
 record: any={}; //record variable declare
 url;
 name:any;
 
 
 imageFile = null;

  constructor(public crud:CrudService,private authservice:AuthService,private route:ActivatedRoute,private AngularFirestore:AngularFirestore,private router:Router,private storage: AngularFireStorage) 
  {
    this.authservice.user.subscribe(res =>{ //we take user id 29/7
      console.log(res);
      
    }
      )
    
  }

 onSelectFile(event) { // called each time file input changes
    console.log(event);
    console.log(event.target.files);
    console.log(event.target.files[0]);
    
    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(event.target.result);
        
        
      }
     
      this.imageFile= event.target.files[0];
      console.log(this.url);
      console.log(this.imageFile);
      
    }
    
  }


  async imageUpload() {
    var name = this.imageFile.name;
    const fileRef = this.storage.ref(name);
    console.log(this.imageFile.name);    
    await this.storage.upload(name, this.imageFile).then(async completed=>{
      await completed.ref.getDownloadURL().then(async url => {
        console.log("old url",this.record.image);        
       return this.record.image=url,
        console.log(this.record.image) 

      }).catch(err=>{
        console.log(err)
      })
    }).catch(err=>{
      console.log(err)
    })
  }


  async update()
  {
    if(this.imageFile){
    await this.imageUpload()
    }
    console.log(this.record);
    this.crud.update(this.record.id,this.record).then((result) =>{

    
    console.log(result);
    alert("Employee data save done");
    this.router.navigateByUrl("/adm/employeelist");
  }).catch((error: any) => {
    console.log(error);
  });


}


back()
{
  this.router.navigateByUrl("/adm/employeelist");
}

  
  

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id); // route:router this for navigate,snapshot means it will show updated value,
                                                // params means parameters we can give own name,id means it call from parameter
    this.id=this.route.snapshot.params.id; 
    this.AngularFirestore.collection("Employee").doc(this.id).get().toPromise().then((result) => { // we set name called result
    this.record=result.data(); //we show result data into the record. 
    this.url = this.record.image; 
    console.log(this.record.employeeid); //
    // console.log(doc.data());
  });

  }

}
