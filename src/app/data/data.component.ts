import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupcomponentComponent } from '../popupcomponent/popupcomponent.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  data:any=[]
  constructor(private api:ApiService, private router:Router, private dialog: MatDialog){
    
    // ngOnInit(): void{
    this.api.viewSurgery().subscribe(
      (response:any)=>{
       
        this.data=response.surgeryList;//dto
        console.log(this.data)
      }
    )
  }

  openDialog(i:any): void {
    console.log(i);
    console.log(i.id);
    
    
    const dialogRef = this.dialog.open(PopupcomponentComponent, {
      width: "390px",
      height: "254px",
      panelClass: 'confirm-dialog-container',
      disableClose: true,
     data: {
      i
     }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
  }
}


