import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [{
  path: '',
  component: ProductsViewComponent
}, {
  path: 'add',
  component: ProductsAddComponent
}, {
  path: 'details',
  component: ProductDetailsComponent
}, {
  path: 'edit',
  component: ProductEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
