import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  // productResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true
  // };
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.productService.getProduct().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded=true
    });
  }
}
