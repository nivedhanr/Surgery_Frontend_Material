import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-popup2',
  templateUrl: './popup2.component.html',
  styleUrls: ['./popup2.component.css']
})

export class Popup2Component {


  note1=""
  id: any;
 
  constructor(private api:ApiService,private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data:any, private http:HttpClient,private router:Router,public dialogRef: MatDialogRef<Popup2Component>,private location:Location){
    
    this.id=data;
    console.log(this.id);
    console.log(this.id.user.i.id);
    
    
      
    }
    ngOnInit(){
      // this.data=data.user
        // console.log(this.id);
        
      
      }


updateNote=(id:any)=>{
  console.log(id);
  
  

  let data1:any={
    "note":this.note1
  }
  this.api.deleteSurgery(id,data1).subscribe(
    (response:any)=>{
      
    console.log(response);
    window.location.reload();
  }
  )
 
}

}


    



    


  //     delete(surgeryList:any)
  //     {
  // this.note=surgeryList.note;


  //     }
      
      
        
      
      // console.log(this.id.user.i.id)
      // this.api.deleteSurgery(data).subscribe(
      //   (response:any)=>{
      //     console.log(response)
      //     if (response.status == "success") {
      //       alert("Successfully")
      //       this.note=""
            
      //     }else{
      //       alert("Something went wrong")
            
      //     }
      //     }
      // )
    
  



