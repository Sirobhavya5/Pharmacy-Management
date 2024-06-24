import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { PurchaseDrug } from 'src/app/shared/purchase-drug.model';
import { DrugService } from 'src/app/shared/drug.service';
import { Drug } from 'src/app/shared/drug.model';
import { NgForm } from '@angular/forms';
import { PurchaseService } from 'src/app/shared/purchase.service';

@Component({
  selector: 'app-purchase1-drugs',
  templateUrl: './purchase1-drugs.component.html',
  styles: []
})
export class purchase1drugsComponent implements OnInit {
  formData: PurchaseDrug;
  DrugList: Drug[];
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data :any,
    public dialogRef: MatDialogRef<purchase1drugsComponent>,
    private DrugService: DrugService,
    private PurchaseService: PurchaseService) { }

  ngOnInit() {
    this.DrugService.getdrugList().then(res => this.DrugList = res as Drug[]);
    if (this.data.purchaseDrugIndex == null)
      this.formData = {
        purchasedrugID : null,
        purchaseID : this.data.purchaseID ,
        drugID : 0,
        drugName: '',
        Price: 0,
        Quantity: 0,
        Total: 0
      }
    else
      this.formData = Object.assign({}, this.PurchaseService.purchaseDrug[this.data.purchaseDrugIndex]);
  }

  updatePrice(ctrl: any) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Price = 0;
      this.formData.drugName = '';
    }
    else {
      this.formData.Price = this.DrugList[ctrl.selectedIndex - 1].Price;
      this.formData.drugName = this.DrugList[ctrl.selectedIndex - 1].drugName;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.formData.Total = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.purchaseDrugIndex == null)
        this.PurchaseService.purchaseDrug.push(form.value);
      else
        this.PurchaseService.purchaseDrug[this.data.purchaseDrugIndex] = form.value;
      this.dialogRef.close();
    }
  }

  validateForm(formData: PurchaseDrug) {
    this.isValid = true;
    if (formData.drugID == 0)
      this.isValid = false;
    else if (formData.Quantity == 0)
      this.isValid = false;
    return this.isValid;
  }

}