import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  data:any=[]
  constructor(private api:ApiService){
    
    
    this.api.viewSurgery().subscribe(
      (response:any)=>{
        console.log(response);
        this.data=response;

      }
    )
  }
  
  showTable=false;
  ngOnInit(): void {
    this.showTable=false;
  }
  table(){
    console.log("Hello");
    this.showTable=true;
  }
}
