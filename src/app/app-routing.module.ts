import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
//   {
// path:'',component:SignupComponent
//   },
//   {
// path:'management',component:ProductManagementComponent,
// children:[
//   {path:'addproduct',component:EditProductComponent}
// ]
//   },
  {
    path:'',
    loadChildren: () => import('../app/product-crud/product-crud.module').then( m => m.ProductCrudModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
