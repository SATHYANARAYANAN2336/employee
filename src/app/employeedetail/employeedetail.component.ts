import { AuthService } from './../service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { CrudService } from './../service/crud.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';



@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  [x: string]: any;
  record={employeeid:"",employeename:"",reporting:"",dob:"",company:"",department:"",
  designation:"",bloodgroup:"",email:"",address:"",mobile:"",employeetype:"",gender:"",
  bankname:"",employeegrade:"",accountname:"",insurance:"",ifsc:"",pf:"",pan:"",dateofjoin:"",tempaddress:"",doe:"",
  paymenttype:"",esi:"",resignation:"",emergencycontactname:"",emergencycontactmobile:"",relationship:"",
  emergencycontactemail:"",emergencycontactaddress:"",id:"",worktype:"",image:""}
  
  empdata:boolean=true;
  url;
  imageFile = null;

  constructor(private router:Router,public crud:CrudService,private AngularFirestore:AngularFirestore,private authservice:AuthService,private storage: AngularFireStorage) {
    this.authservice.user.subscribe(res =>{
      console.log(res);
      
    })
    this.record.id=this.AngularFirestore.createId()
  }

  ngOnInit(): void {
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
        
      }
      this.imageFile= event.target.files[0];
    }
    console.log(this.url,this.imageFile);
  }

  
  
  async imageUpload() {
    var name = this.imageFile.name;
    const fileRef = this.storage.ref(name);
    await this.storage.upload(name, this.imageFile).then(async completed=>{
      await completed.ref.getDownloadURL().then(async url => {
        this.record.image=url;
      
      }).catch(err=>{
        console.log(err)
      })
    }).catch(err=>{
      console.log(err)
    })
  }


  



  async createrecord()
  {
    if(this.imageFile!=0)
    await this.imageUpload()
    console.log(this.record);
    this.crud.create_Newemployee(this.record.id,this.record).then((_res: any) =>{

      
      console.log(_res);
      window.location.reload()
      alert("Employee data save done");
      // this.router.navigateByUrl("/adm/employeedetails");
      // this.record={employeeid:"",employeename:"",reporting:"",dob:"",company:"",department:"",
      // designation:"",bloodgroup:"",email:"",address:"",mobile:"",employeetype:"",gender:"",
      // bankname:"",employeegrade:"",accountname:"",insurance:"",ifsc:"",pf:"",pan:"",dateofjoin:"",tempaddress:"",doe:"",
      // paymenttype:"",esi:"",resignation:"",emergencycontactname:"",emergencycontactmobile:"",relationship:"",
      // emergencycontactemail:"",emergencycontactaddress:"",id:"",worktype:""};
       
    }).catch((error: any) => { 
      console.log(error);
    });
  }


  back()
    {
      this.router.navigateByUrl("/adm/employeelist");
    }
  
}






