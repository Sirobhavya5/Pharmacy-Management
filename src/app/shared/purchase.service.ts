import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase} from './purchase.model';
import { PurchaseDrug } from './purchase-drug.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  formData: Purchase;
  purchaseDrug: PurchaseDrug[];
readonly rootURL ="http://localhost:44378/api/";
  constructor(private http: HttpClient) { }

  saveOrUpdatePurchase() {
    var body = {
      ...this.formData,
      purchaseDrug: this.purchaseDrug
    };
    return this.http.post(this.rootURL+ '/Purchase', body);
  }

  getPurchaseList() {
    return this.http.get(this.rootURL + '/Purchase').toPromise();
  }

  getPurchaseByID(id:number):any {
    return this.http.get(this.rootURL+ '/Purchase/'+id).toPromise();
  }

  deletePurchase(id:number) {
    return this.http.delete(this.rootURL+  '/Purchase/'+id).toPromise();
  }

}