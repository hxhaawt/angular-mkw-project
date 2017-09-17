import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/product.service";
import { Product } from '../shared/product.service';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    private products: Observable<Product[]>;

    private srcUrl = "http://placehold.it/320x150";

    constructor(private productService: ProductService) {

    }

    ngOnInit() {
        this.products = this.productService.getProducts();

        // 定阅 searchEvent 这个流，这样这个流发射数据时，就会处理 subscribe 内的内容
        this.productService.searchEvent.subscribe(
            (params) => {
                // console.log('product-------', params);
                this.products = this.productService.search(params);
            }
        );
    }

}













