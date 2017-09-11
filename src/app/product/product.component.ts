import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    private products: Array<Product>;

    private srcUrl = "http://placehold.it/320x150";

    constructor() { }

    ngOnInit() {
        this.products = [
            new Product(
                1,
                '第一个商品',
                1.93, 3.4,
                '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。',
                ['电子产品', '硬件产品']),

            new Product(
                2,
                '第二个商品',
                2.95, 4.3,
                '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。',
                ['电子产品', '软件产品']),

            new Product(
                3,
                '第三个商品',
                3.93, 2.6,
                '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。',
                ['电子产品', '软件产品']),

            new Product(
                4,
                '第一个商品',
                1.93, 1.5,
                '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。',
                ['电子产品', '硬件产品']),

            new Product(
                5,
                '第二个商品',
                3.90, 2.4,
                '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。',
                ['电子产品', '软件产品']),

            new Product(
                6,
                '第三个商品',
                1.93, 3.1,
                '这是一个商品描述，测试。这是一个商品描述，测试。这是一个商品描述，测试。',
                ['电子产品', '硬件产品']),
        ];
    }

}

export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) {

    }
}













