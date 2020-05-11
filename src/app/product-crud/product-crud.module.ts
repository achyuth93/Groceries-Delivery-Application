import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCrudRoutingModule } from './product-crud-routing.module';
import { SignupComponent } from './signup/signup.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductChartComponent } from './product-chart/product-chart.component';
import { LoginComponent } from './login/login.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'
import {OrderModule} from 'ngx-order-pipe'
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductBarChartComponent } from './product-bar-chart/product-bar-chart.component';


@NgModule({
  declarations: [SignupComponent, EditProductComponent, ProductListComponent, AddProductComponent, ProductChartComponent, LoginComponent, ProductBarChartComponent],
  imports: [
    CommonModule,
    ProductCrudRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  exports:[SignupComponent, EditProductComponent]
})
export class ProductCrudModule { }
