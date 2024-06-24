import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly rootURL="http://localhost:44378/api";
  constructor(private http : HttpClient) { }

  getCustomerList(){
    return this.http.get(this.rootURL+'/Customer').toPromise();
   }
}