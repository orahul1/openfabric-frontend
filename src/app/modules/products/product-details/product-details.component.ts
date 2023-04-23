import { DataService } from './../../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  constructor(public dataService: DataService) { }



}
