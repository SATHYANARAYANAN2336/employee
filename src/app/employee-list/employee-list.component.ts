import { AngularFirestore } from '@angular/fire/firestore';
import { OnInit,Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  [x: string]: any;
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['employeename','designation','email','mobile','view','edit','delete'];
  dataSource: any;
  employeelist:any;
  opened=false;


  constructor(private authservice:AuthService,private dialog:MatDialog,private angularFirestore:AngularFirestore,private router:Router) 
  {
    
   }

  ngOnInit(): void {
    this.angularFirestore.collection("Employee").valueChanges().subscribe( required => {
        console.log(required);
        this.employeelist=required;
        this.authservice.user.subscribe(res =>{
          console.log(res);
          this.data=res;
          console.log(this.data);
          if(this.data[0]['employee'] == true){  // array:In data we call 0: 
              this.filteredarray=this.employeelist.filter(item =>{ //filtered array concept
              console.log(item);
              return item.email===this.data[0].email; //or this.data[0]['employee'] we check email is matched or not
            })
              this.dataSource=new MatTableDataSource(this.filteredarray); //we call filteredarray value means which person logged in
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
          }
          else{
              this.dataSource=new MatTableDataSource(this.employeelist); // we call employeelist details
              console.log(this.dataSource);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
          }
        })
  });
  
  }
  Back(){
    this.router.navigateByUrl("back");
  }
  
  onrowedit(id: any){
    console.log(id);
    this.router.navigateByUrl(`adm/edit/${id}`)
      
   }

   onrowview(id:any){
     console.log(id);
     this.router.navigateByUrl(`adm/view/${id}`)
     
   }


   onrowdelete(id: any){
    if(confirm("Are you sure to delete this record")){
      this.angularFirestore.doc('Employee/'+id).delete();
    }
    }

   
   
  
  
 
 




}

  

   

