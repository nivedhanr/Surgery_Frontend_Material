import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { DataComponent } from './data/data.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupcomponentComponent } from './popupcomponent/popupcomponent.component';
import { Popup2Component } from './popup2/popup2.component';

const myRoute:Routes=[
  {
    path:"data",
    component:DataComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  },
  {
    path:"popup1",
    component:PopupcomponentComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopnavbarComponent,
    DataComponent,
    PopupcomponentComponent,
    Popup2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
