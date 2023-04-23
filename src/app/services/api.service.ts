import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getAllProducts() {
    return this.http.get(`${environment.API_URL}/product/all`);
  }

  createProduct(data: Object) {
    return this.http.post(`${environment.API_URL}/product/create`, data);
  }

  updateProduct(data: Object) {
    return this.http.put(`${environment.API_URL}/product/update`, data);
  }

  deleteProduct(productId: String) {
    return this.http.delete(`${environment.API_URL}/product/${productId}`)
  }

  generateToken() {
    return this.http.get(`${environment.API_URL}/app/token`)
  }

}
