import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Popup2Component } from '../popup2/popup2.component';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popupcomponent',
  templateUrl: './popupcomponent.component.html',
  styleUrls: ['./popupcomponent.component.css']
})
export class PopupcomponentComponent {
  user:any;
  
constructor(private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data:any){
this.user=data;
  
}
ngOnInit(){
// this.data=data.user
  console.log(this.user);
  
}
  openPopUp2(user:any): void {
    console.log(user.i.id);
    
    const dialogRef = this.dialog.open(Popup2Component, {
      // width: "390px",
      // height: "px",
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  
  }
}
