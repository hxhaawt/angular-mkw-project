import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {ProductService} from "./shared/product.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipe/filter.pipe';
import {HttpModule} from "@angular/http";
import {WebSocketService} from "./shared/web-socket.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product/:productId',
        component: ProductDetailComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routeConfig),
      HttpModule
  ],
  providers: [ProductService, WebSocketService,
    //  主要是放到服务器中，在其他路径刷新不显示问题
    {provide: LocationStrategy, useClass: HashLocationStrategy}
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }




















