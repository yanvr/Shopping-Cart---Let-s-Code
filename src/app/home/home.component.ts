import { Product } from '../model/interfaces';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProducts: Product[] = [];

  constructor(private api: ApiService) {
    this.api.listProducts()
    .subscribe(data => this.listProducts = data)
  }

  ngOnInit(): void {
  }

}
