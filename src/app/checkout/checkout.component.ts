import { Product } from 'src/app/model/interfaces';
import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products: Product[] = [];
  totalOrder: number = 0;
  isDisabledBtn: boolean = true;

  constructor(private localStorageService: LocalStorageService) {
  }
  
  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.products = this.localStorageService.getLocalStorage();
    this.totalOrder = this.localStorageService.calculateTotalPrice();
    this.checkButtonStatus();
  }
  
  increaseQuantity(prod: Product){
    const ADD_QUANTITY = 1;
    this.localStorageService.updateLocalStorage(prod.id, ADD_QUANTITY);
  }
  
  decreaseQuantity(prod: Product){
    const REMOVE_QUANTITY = - 1;
    if (prod.quantity === 1) {
      this.localStorageService.removeLocalStorage(prod.id);
      this.checkButtonStatus();
    }
    else {
      this.localStorageService.updateLocalStorage(prod.id, REMOVE_QUANTITY);
    }
  }

  removeProduct(prod: Product) {
    this.localStorageService.removeLocalStorage(prod.id);
    this.products = this.localStorageService.getLocalStorage();
    this.totalOrder = this.localStorageService.sizeOfCart() === 0 ? 
      0 : this.localStorageService.calculateTotalPrice();
  }

  checkButtonStatus(){
    if( this.localStorageService.sizeOfCart() === 0) {
      this.isDisabledBtn = true;
    }
    else {
      this.isDisabledBtn = false;
    }
  }
}
