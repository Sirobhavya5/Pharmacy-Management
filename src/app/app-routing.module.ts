import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { Purchase1Component } from './purchase/purchase1/purchase1.component';

const routes: Routes = [
  {path:'',redirectTo:'purchase1',pathMatch:'full'},
  {path:'purchase',component:PurchaseComponent},
{path:'purchase1',children:[
  {path:'',component:Purchase1Component},
  {path:'edit/:id',component:Purchase1Component},
  
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }