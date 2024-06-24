import { CustomerService } from './../../shared/customer.service';
import { PurchaseService } from './../../shared/purchase.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { purchase1drugsComponent } from '../purchase1-drugs/purchase1-drugs.component';
import { Customer } from 'src/app/shared/customer.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-purchase1',
  templateUrl: './purchase1.component.html',
  styles: []
})
export class Purchase1Component implements OnInit {
 
  customerList: Customer[];
  isValid: boolean = true;
  

  constructor(public service:  PurchaseService,
    private dialog: MatDialog,
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit() :void {
    
    
    let purchaseID = this.currentRoute.snapshot.paramMap.get('id');
    if (purchaseID == null)
      this.resetForm();
    // else {
    //   this.service.getPurchaseByID(parseInt(purchaseID)).then(x => {
    //     this.service.formData = x.purchase;
    //     this.service.purchaseDrug = x.purchaseDetails;
    //   });
    // }
    this.customerService.getCustomerList().then(res=>this.customerList=res as Customer[]);

   
  }

  resetForm(form?: NgForm) {
    
    this.service.formData = {
      purchaseID: null,
      purchaseNo: Math.floor(100000 + Math.random() * 900000).toString(),
      CustomerID: 0,
      Payment:'',
      Total: 0,
      DeletedPurchaseDrugIDs:''
    };
    this.service.purchaseDrug = [];
  }

  AddOrEditPurchaseDrug(purchaseDrugIndex:any, purchaseID:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { purchaseDrugIndex, purchaseID };
    this.dialog.open(purchase1drugsComponent, dialogConfig).afterClosed().subscribe(res => {
      this.updateGrandTotal();
    });
  }


  onDeletepuchasedrug(purchasedrugID: number, i: number) {
    if (purchasedrugID != null)
      this.service.formData.DeletedPurchaseDrugIDs += purchasedrugID + ",";
    this.service.purchaseDrug.splice(i, 1);
    this.updateGrandTotal();
  }

  updateGrandTotal() {
    this.service.formData.Total = this.service.purchaseDrug.reduce((prev, curr) => {
      return prev + curr.Total;
    }, 0);
    this.service.formData.Total = parseFloat(this.service.formData.Total.toFixed(2));
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.CustomerID == 0)
      this.isValid = false;
    else if (this.service.purchaseDrug.length == 0)
      this.isValid = false;
    return this.isValid;
  }


  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.service.saveOrUpdatePurchase().subscribe(res => {
        this.resetForm();
        this.toastr.success('Submitted Successfully', 'Pharmacy ');
        this.router.navigate(['/purchase']);
      })
    }
  }

}