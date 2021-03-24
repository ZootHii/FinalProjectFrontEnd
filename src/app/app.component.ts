import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'final-project-frontend'; // java scriptte tip veremeyiz fakat typescriptte verebiliyoruz tip güvenli
  user: string = 'Ahmet Yıldırım';
  product0: any = {productId: 1, productName: 'Bardak', category: 1, unitPrice: 5}; // {} obje oluşturma notasyon
  product1: any = {productId: 2, productName: 'Elam', category: 3, unitPrice: 13};
  product2: any = {productId: 3, productName: 'Armut', category: 5, unitPrice: 23};
  product3: any = {productId: 4, productName: 'Birşey', category: 4, unitPrice: 43};

  products = [this.product0, this.product1, this.product2, this.product3]; // *ngFor Directive demek : bulunduğun satırı <li> tekrar et
}


/*
'ng serve --open' diyip çalıştır terminalden ctrl+c yaparsan kod durur
her değişiklik yapmanda ctrl+s yaparsan sayfa yenilenir aynı flutter
'ng g component product' product component generate
Angular, React, VueJs

SPA : Single Page Applications tek bir sayfadan oluşur
Component : bunlar ile çalışırlar aynı flutterda olduğu gibi

Componentlerin yerini değiştirip gösterip gizleyerek tek bir sayfa üzerinde
işlemleri yaparız

node_modules : bu klasörde tüm node uygulamaları bulunur ->  paketler

githubtan uygulama çekersek konsola 'npm install' yazarak gitignore ile
ignore edilen paketleri indiririz ve çalışmaya hazır oluruz

paketleriin nereden geleceği package.json içinde tutulur
proje çalışırken gerekli olan paketler 'dependencies' kısmındadır
geliştiricinin ihtiyacı yayın dışında olan paketler 'devDependencies' kısmındadır

src->app : uygulama kodları oradadır
src->assets : unity gibi font fotoğraf falan
src->index.html : tek uygulama sayfamız vardı o safyamızda bu
	içerisindeki body de <app-root> var bu bir 'component'
	dir ve eklenip çıkarılarak tek sayfada işlemleri yapıyoruz

app.component.css -> tasarım olarak değişiklikler app.component e özel
**app.component.html -> sayfa yapısı app.component e özel
app.component.spec.ts -> unit test app.component e özel
**app.component.ts -> body içinde olan asıl component app.component e özel
** : en önemli dosyalar
ts : typescript
js : javascript

html -> olayın görüntü kısmı
ts -> olayın yönetim kısmı, data yönetim kısmı

Angular
  her şey class
  Compınent html datasını yönettiğimiz yer
  Decleration imza C# taki attribute gibi
  {} parantez demek obje demek
  component basit bir class ama üstündeki decleration ile tanımlıyoruz
  ./ aynı klasörde bulunan yer path
  [] array demek gene
*/
