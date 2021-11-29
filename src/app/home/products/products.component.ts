import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: Product = {id:'', description: '', price: 0, quantity: 0, img: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
