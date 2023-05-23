import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-popupcomponent',
  templateUrl: './popupcomponent.component.html',
  styleUrls: ['./popupcomponent.component.css']
})
export class PopupcomponentComponent {
  user: any;
  note1 = ""
  id: any;


  constructor(private api: ApiService, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PopupcomponentComponent>) {
    this.user = data;
    console.log(data)
    this.id = data.id;
  }
  ngOnInit() {
    // this.data=data.user
    console.log(this.user);

  }


  updateNote = () => {
    
    let data1: any = {
      "note": this.note1
    }
    this.api.deleteSurgery(this.id, data1).subscribe(
      (response: any) => {
        
        console.log(response);
      }
    )

  }
}
