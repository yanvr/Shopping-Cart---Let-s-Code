import { Product } from '../model/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor() { }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem("products") ?? "[]");
  }

  setLocalStorage(prod: Product) {
    let list: Product[] = this.getLocalStorage();
    if (list.some(p => p.id === prod.id)) return;
    list.push(prod);
    localStorage.setItem("products", JSON.stringify(list));
  } 

  updateLocalStorage(id: string, value: number) {
    let list: Product[] = this.getLocalStorage();
    const newList = list.map(p => p.id === id ? 
      { id: p.id,
        description: p.description,
        price: p.price,
        quantity: p.quantity + value
      } :
       p
    );
    localStorage.setItem("products", JSON.stringify(newList))
    this.calculateTotalPrice()
  }

  removeLocalStorage(id: string) {
    let list: Product[] = this.getLocalStorage();
    const newList = list.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(newList));
  }

  calculateTotalPrice() {
    let list: Product[] = this.getLocalStorage();
    const total = list.
    reduce((acc, currentProd) => 
    (currentProd.price * currentProd.quantity) + acc, 0)
    return total;
  }

  sizeOfCart() {
    return localStorage.length;
  }

 
}
