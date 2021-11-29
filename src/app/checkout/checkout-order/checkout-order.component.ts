import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css']
})
export class CheckoutOrderComponent implements OnInit {

  @Input() totalOrder: number = 0;
  @Input() isDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
