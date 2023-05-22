import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  // private apiUrl='http://localhost:8080/Surgery/delete';
  constructor(private http:HttpClient) { }

  viewSurgery(){
    
    return this.http.get("http://localhost:8080/Surgery/view")
  }

  deleteSurgery=(id:any,surgeryList:any)=>{
    return this.http.put(`http://localhost:8080/Surgery/delete`,surgeryList,id);
  }
  // updatedData(data:any): Observable<any>{
  //   const headers=new HttpHeaders({
  //     'Content-Type':'application/json'
  //   });
  //   return this.http.put<any>(this.apiUrl,data,{headers});
  // }
}
