import { Product } from '../model/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API fake - JSON server
  baseURl = "http://localhost:3000/produtos"

  constructor(private httpClient: HttpClient) { }

  listProducts() {
    return this.httpClient.get<Product[]>(this.baseURl)
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(
      `${this.baseURl}/${id}`
    )
  }

  addCart(prod: Product) {
    this.httpClient.post(
      this.baseURl,
      prod
    )
  }
}
