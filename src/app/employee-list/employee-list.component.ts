import { AngularFirestore } from '@angular/fire/firestore';
import { OnInit,Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  [x: string]: any;
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['employeename','designation','email','mobile','edit','view','delete'];
  dataSource: any;
  employeelist:any;


  constructor(private dialog:MatDialog,private angularFirestore:AngularFirestore,private router:Router) { }

  ngOnInit(): void {
    this.angularFirestore.collection("Employee").valueChanges().subscribe( required =>
      {
        console.log(required);
        this.employeelist=required;
        this.dataSource=new MatTableDataSource(this.employeelist);
        console.log(this.dataSource);
        
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  });
  }
  Back(){
    this.router.navigateByUrl("back");
  }
  
  onrowedit(id: any){
    console.log(id);
    this.router.navigateByUrl(`/edit/${id}`)
      
   }

   onrowview(id:any){
     console.log(id);
     this.router.navigateByUrl(`/view/${id}`)
     
   }


   onrowdelete(id: any){
    if(confirm("Are you sure to delete this record")){
      this.angularFirestore.doc('Employee/'+id).delete();
    }
    }

   
   
  
  
 
 




}

  

   

