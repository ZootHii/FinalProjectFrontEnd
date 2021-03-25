import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"; // injection yaptık

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NavibarComponent } from './components/navibar/navibar.component';

@NgModule({
  declarations: [
    AppComponent, // otomatik component oluşturunca buraya ekliyor
    ProductComponent,
    CategoryComponent,
    NavibarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // ve import edip tamamladık
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
