import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"; // this helps us to connect backend API (API CALL), // reactta axios, js de fetch
import {Observable} from "rxjs";
import {ListResponseModel} from "../models/listResponseModel";
import {Product} from "../models/product";

@Injectable({ // injectable görürsek servis olduğunu anlıyoruz // bunuda httpclient gibi inject etmemiz gerek
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "https://localhost:44314/api/Products/getall";
  constructor(private httpClient: HttpClient) { }

  // java scriptte methodların ne döneceğini belirtemiyoruz typescriptte yapabiliyoruz
  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)
  }
}
