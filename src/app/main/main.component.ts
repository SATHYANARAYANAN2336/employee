import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  [x: string]: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['employeename','checkbox','checkbox1','checkbox2'];
  dataSource: any;
  
  // employeelist:any;
  
  
  


  constructor(private authservice:AuthService,private dialog:MatDialog,private angularFirestore:AngularFirestore,private router:Router) { }

  ngOnInit(): void {
    this.angularFirestore.collection("Userdata").valueChanges().subscribe( required =>
      {
        console.log(required);
        this.employeelist=required;
        this.dataSource=new MatTableDataSource(this.employeelist);
        console.log(this.dataSource);
        
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  });
  }

  check(event:any,id)
  {
    console.log(id);
    console.log(event.checked); 
      
      if(event.checked==true){
        this.angularFirestore.collection("Userdata").doc(id).update({
          admin:true
        });
      }
      if(event.checked==false){
        this.angularFirestore.collection("Userdata").doc(id).update({
          admin:false
        });
      }
     
    }

    checkemp(event:any,id)
    {
      console.log(id);
      console.log(event.checked); 
        
        if(event.checked==true){
          this.angularFirestore.collection("Userdata").doc(id).update({
            employee:true
          });
        }
        if(event.checked==false){
          this.angularFirestore.collection("Userdata").doc(id).update({
            employee:false
          });
        }
       
      }  


      checksuperadmin(event:any,id)
      {
        console.log(id);
        console.log(event.checked); 
          
          if(event.checked==true){
            this.angularFirestore.collection("Userdata").doc(id).update({
              superadmin:true
            });
          }
          if(event.checked==false){
            this.angularFirestore.collection("Userdata").doc(id).update({
              superadmin:false
            });
          }
         
        }  
    
       
  }

  

 

  

