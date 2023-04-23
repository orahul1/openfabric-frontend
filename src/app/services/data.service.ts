import { Injectable } from '@angular/core';

interface ProductInterface {
  name: string;
  description: string;
  price: number;
  rating: number;
  _id: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedProduct!: ProductInterface;
  selectedProductEdit!: ProductInterface;

  constructor() { }
}
