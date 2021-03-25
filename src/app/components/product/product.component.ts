import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //product0: any = {productId: 1, productName: 'Bardak', category: 1, unitPrice: 5}; // {} obje oluşturma notasyon

  products: Product[] = []; // *ngFor Directive demek : bulunduğun satırı <li> tekrar et
  dataLoaded = false;

  /*productResponseModel:ProductResponseModel={
    data: this.products,
    message: "",
    success: true
  };*/


  constructor(private productService: ProductService/*private httpClient: HttpClient*/) { // httpClient injection only in Angular app.module.ts içinde yapıyoruz // httpclient ı service içine taşıdık oradaki constructor
  }

  ngOnInit(): void { // component ilk açılınca çalışan yer
    //console.log("init çalıştı");
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => { // getProducts.subscribe async çalışıyor yani işi bitmeden bitmiyor
      this.products = response.data
      this.dataLoaded = true;
    });
  }
}
