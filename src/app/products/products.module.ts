import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './list-products/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AssignUserComponent } from './list-products/assign-user/assign-user.component';

@NgModule({
  declarations: [ListProductsComponent, AddProductComponent, AssignUserComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
