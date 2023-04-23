import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ProductsViewComponent } from './products-view/products-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductDeleteDialogComponent } from './product-delete-dialog/product-delete-dialog.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductsViewComponent,
    ProductDeleteDialogComponent,
    ProductsAddComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class ProductsModule { }
