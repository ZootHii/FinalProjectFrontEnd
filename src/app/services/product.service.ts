import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"; // this helps us to connect backend API (API CALL), // reactta axios, js de fetch
import {ProductResponseModel} from "../models/productResponseModel";
import {Observable} from "rxjs";

@Injectable({ // injectable görürsek servis olduğunu anlıyoruz // bunuda httpclient gibi inject etmemiz gerek
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "https://localhost:44314/api/Products/getall";
  constructor(private httpClient: HttpClient) { }

  // java scriptte methodların ne döneceğini belirtemiyoruz typescriptte yapabiliyoruz
  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)
  }
}
