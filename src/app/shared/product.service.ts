import {EventEmitter, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class ProductService {

    searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();

    constructor(private http: Http) { }
    // 返回所有的产品信息
    getProducts(): Observable<Product[]> {
        return this.http.get('/api/products').map( (res) => res.json() );
    }

    // 返回对应id的产品
    getProduct(id: number): Observable<Product> {
        return this.http.get('/api/products/' + id).map( (res) => res.json());
    }

    // 返回id对应商品的所有评论信息
    getCommentsForProductId(id: number): Observable<Comment[]> {

        return this.http.get('/api/products/' + id + '/comments').map( (res) => res.json() );
    }

    // 返回所有的产品分类
    getAllCategories(): string[] {
        return ['电子产品', '硬件产品', '软件产品'];
    }

    // 返回要搜索的产品
    search(params: ProductSearchParams): Observable<Product[]> {

        let str: string = '/api/products' + this.encodeParams2(params);
        return this.http.get(str).map( (res) => res.json() );

        // return this.http.get('/api/products', {search: this.encodeParams(params)})
        //     .map( (res) => res.json() );
    }

    // 返回正确的 search 搜索参数
    private encodeParams(params: ProductSearchParams): URLSearchParams {

        // 这个函数有问题，不知道为什么sum没有值
        return Object.keys(params)
            .filter(key => params[key])
            .reduce((sum: URLSearchParams, key: string) => {

                sum.append(key, params[key]);

                return sum;
            }, new URLSearchParams());
    }

    // 返回正确的 search 搜索参数
    private encodeParams2(params: ProductSearchParams): string {

        const keyArr: Array<string> = Object.keys(params)
                                .filter(key => params[key]);
        let str: string[] = [];
        let str2: string  = '';
        for (let i = 0; i < keyArr.length; i++) {
            str[i] = (keyArr[i] + '=' + params[keyArr[i]]);
        }

        // 可以用 encodeURI() 把字符串进行 URI 编码
        str2 = '?' + str.join('&');

        // console.log(str2);

        return str2;
    }
}


// 单个产品类
export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>    // 产品分类
    ) {

    }
}

// 评论类
export class Comment {

    constructor (
        public id: number,
        public productId: number,
        public timestamp: string,
        public user: string,
        public rating: number,
        public content: string
    ) {}
}

// 获取产品搜索信息类
export class ProductSearchParams {
    constructor (
        public title: string,       // 商品title
        public price: number,       // 商品价格
        public category: string     // 商品分类
    ) {}
}











