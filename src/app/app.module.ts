import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { PurchaseComponent } from './purchase/purchase.component';
import { Purchase1Component } from './purchase/purchase1/purchase1.component';
import { purchase1drugsComponent } from './purchase/purchase1-drugs/purchase1-drugs.component';
import { PurchaseService } from './shared/purchase.service';
@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    Purchase1Component,
    purchase1drugsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    ToastrModule.forRoot()
  ],
  entryComponents:[purchase1drugsComponent],
  providers: [PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }