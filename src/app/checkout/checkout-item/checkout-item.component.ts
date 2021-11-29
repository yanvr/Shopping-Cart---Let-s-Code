import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/interfaces';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {

  @Input() product: Product = {id: "", description: "", price: 0, quantity: 0, img: ""};
  @Output() increaseEvent = new EventEmitter();
  @Output() decreaseEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();

  totalPrice: number = 0;

  constructor() { 
  }
  
  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    this.totalPrice = this.product.price * this.product.quantity;
  }

  raiseQuantity() {
    return this.increaseEvent.emit(this.product);
  }

  reduceQuantity() {
    return this.decreaseEvent.emit(this.product);
  }

  removeItem() {
    return this.removeEvent.emit(this.product);
  }

}
