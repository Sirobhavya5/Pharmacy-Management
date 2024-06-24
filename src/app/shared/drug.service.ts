import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
readonly rootURL="http://localhost:44378/api";
  constructor(private http:HttpClient) { }

  getdrugList(){
   return this.http.get(this.rootURL+'/Drug').toPromise();
  }
}