import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './list-products/add-product/add-product.component';
import { AssignUserComponent } from './list-products/assign-user/assign-user.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListProductsComponent
  },
  {
    path: 'create',
    component: AddProductComponent
  },
  {
    path: 'assign',
    component: AssignUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
