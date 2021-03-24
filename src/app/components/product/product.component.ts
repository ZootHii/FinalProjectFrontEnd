import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product0: any = {productId: 1, productName: 'Bardak', category: 1, unitPrice: 5}; // {} obje oluşturma notasyon
  product1: any = {productId: 2, productName: 'Elam', category: 3, unitPrice: 13};
  product2: any = {productId: 3, productName: 'Armut', category: 5, unitPrice: 23};
  product3: any = {productId: 4, productName: 'Birşey', category: 4, unitPrice: 43};

  products = [this.product0, this.product1, this.product2, this.product3]; // *ngFor Directive demek : bulunduğun satırı <li> tekrar et

  constructor() { }

  ngOnInit(): void {
  }

}
