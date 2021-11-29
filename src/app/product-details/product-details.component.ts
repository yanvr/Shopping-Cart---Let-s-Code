import { LocalStorageService } from '../services/local-storage.service';
import { Product } from '../model/interfaces';
import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {id:'', description: '', price: 0, quantity: 0, img: ""};

  constructor(private apiService: ApiService, private route: ActivatedRoute, private localStorage: LocalStorageService) { 
    const productId = this.route.snapshot.params["id"];
    this.apiService.getProduct(productId).subscribe(
      prod => this.product = prod
    )
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.localStorage.setLocalStorage(this.product)
  }

}
