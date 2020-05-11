import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { ProductChartComponent } from './product-chart/product-chart.component';
import { ProductBarChartComponent } from './product-bar-chart/product-bar-chart.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HomeComponent } from './home/home.component';
import { PulsesComponent } from './pulses/pulses.component';
import { OilsComponent } from './oils/oils.component';


const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'pulses',component:PulsesComponent},
  {path:'oils',component:OilsComponent},
  {path:'products',component:InventoryComponent},
  {path:'add',component:AddProductComponent},
  {path:'edit/:id',component:EditProductComponent},
  {path:'login',component:LoginComponent},
  {path:'chart',component:ProductChartComponent},
  {path:'barchart',component:ProductBarChartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCrudRoutingModule { }
