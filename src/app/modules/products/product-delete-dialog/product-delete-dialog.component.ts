import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


interface DialogData {
  id: string;
}

@Component({
  selector: 'app-product-delete-dialog',
  templateUrl: './product-delete-dialog.component.html',
  styleUrls: ['./product-delete-dialog.component.scss']
})
export class ProductDeleteDialogComponent {
  deleteButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<ProductDeleteDialogComponent>) { }


  deleteProduct() {
    this.deleteButtonClick.emit()
  }
}
