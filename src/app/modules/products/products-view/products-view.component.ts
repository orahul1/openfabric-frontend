import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductDeleteDialogComponent } from '../product-delete-dialog/product-delete-dialog.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';

interface ProductInterface {
  name: string;
  description: string;
  price: number;
  rating: number;
  _id: string;
}

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent {
  allProducts!: Array<ProductInterface>;
  isLoading: Boolean = false;
  rating = this.generateRandomNumber();
  subscription!: Subscription;
  selectedDeleteProduct!: String;
  isUnAuthorized!: Boolean;

  constructor(public dialog: MatDialog,
    private router: Router,
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    private dataService: DataService) { }


  deleteDialog(id: String) {
    this.selectedDeleteProduct = id;
    const dialogRef = this.dialog.open(ProductDeleteDialogComponent, {
      width: '300px',
    });

    dialogRef.componentInstance.deleteButtonClick.subscribe(() => {
      this.deleteProduct();
    });
  }

  editProduct(product: ProductInterface) {
    this.dataService.selectedProductEdit = product;
    this.router.navigateByUrl('/edit')
  }

  viewProduct(product: ProductInterface) {
    this.dataService.selectedProduct = product;
    this.router.navigateByUrl('/details')
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.isLoading = true;
    this.subscription = this.apiService.getAllProducts().subscribe({
      next: (result: any) => {
        this.isLoading = false;
        this.isUnAuthorized = false;
        result.result.forEach((product: ProductInterface) => {
          product.rating = this.generateRandomNumber()
        });
        this.allProducts = result.result;
      },
      error: (error) => {
        console.log(error)
        this.isLoading = false;
        this._snackBar.open(error.error.error || error.error.message, '', { panelClass: "error-product-add", duration: 5000 })
        error.status === 401 || error.status === 500 ? this.isUnAuthorized = true : this.isUnAuthorized = false
      }
    });
  }

  deleteProduct() {
    this.isLoading = true;
    this.subscription = this.apiService.deleteProduct(this.selectedDeleteProduct).subscribe({
      next: (result: any) => {
        this.isLoading = false;
        this.getAllProducts();
        this._snackBar.open(result?.message, '', { panelClass: "success-product-add", duration: 5000 })
      },
      error: (error) => {
        console.log(error)
        this.isLoading = false;
        this._snackBar.open('Something went wrong !!!', '', { panelClass: "error-product-add", duration: 5000 })
      }
    });
  }

  generateToken() {
    this.isLoading = true;
    this.subscription = this.apiService.generateToken().subscribe({
      next: (result: any) => {
        this.isLoading = false;
        this._snackBar.open(result?.message, '', { panelClass: "success-product-add", duration: 5000 })
        localStorage.setItem('token', result.result)
        this.getAllProducts();
      },
      error: (error) => {
        console.log(error)
        this.isLoading = false;
        this._snackBar.open('Something went wrong !!!', '', { panelClass: "error-product-add", duration: 5000 })
      }
    });
  }


  /**
 * @description This function will generate random number between 1-5 for the rating component
 *  @returns { number } between 1-5
 */
  generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
