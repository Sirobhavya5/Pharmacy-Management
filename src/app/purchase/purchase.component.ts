import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../shared/purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styles: []
})
export class PurchaseComponent implements OnInit {
  purchaseList : any;

  constructor(public  service: PurchaseService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.service.getPurchaseList().then(res => this.purchaseList = res);
  }

  openForEdit(purchaseID: number) {
    this.router.navigate(['/purchase/edit/' + purchaseID]);
  }

  onpurchaseDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePurchase(id).then(res => {
        this.refreshList();
        this.toastr.warning("Deleted Successfully", "Pharmacy");
      });
    }
  }

}