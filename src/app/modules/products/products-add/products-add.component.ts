import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})

export class ProductsAddComponent {
  rowHeight!: string;
  isLoading: boolean = false;
  addProductSubscription!: Subscription;

  productDetails = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  });

  constructor(private breakpointObserver: BreakpointObserver,
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    private router: Router) { }


  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
    ]).pipe(
      map(result => result.matches)
    ).subscribe(matches => {
      this.rowHeight = matches ? "1:2" : "3:1";
    });
  }

  addProduct() {
    this.isLoading = true;
    const data = this.productDetails.value;
    this.addProductSubscription = this.apiService.createProduct(data).subscribe({
      next: (result: any) => {
        this.isLoading = false;
        this._snackBar.open(result?.message, '', { panelClass: "success-product-add", duration: 5000 })
        this.router.navigateByUrl('/')
      },
      error: () => {
        this.isLoading = false;
        this._snackBar.open('Something went wrong !!!', '', { panelClass: "error-product-add", duration: 5000 })
      }
    });
  }


  ngOnDestroy() {
    this.addProductSubscription?.unsubscribe();
  }
}

