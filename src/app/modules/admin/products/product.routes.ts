import { Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';

export const PRODUCTS_ROUTES: Routes = [
    { path: 'list', component: ListProductsComponent },
    { path: 'add', component: AddProductComponent }
  ];
