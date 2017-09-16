import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    // 模拟产品信息
    private products: Product[] = [
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

    // 模拟产品评论信息
    private comments: Comment[] = [
        new Comment(1, 1, '2017-09-22 10：15：50', '张三', 3, '东西不错'),
        new Comment(2, 1, '2017-03-12 80：15：20', '李四', 4, '东西还行'),
        new Comment(3, 2, '2017-07-10 70：15：10', '张三', 2, '东西不错'),
        new Comment(4, 1, '2017-09-12 20：19：21', '王五', 5, '东西还可以'),
        new Comment(5, 2, '2017-08-15 10：05：20', '赵六', 3, '东西不错'),
        new Comment(6, 3, '2017-08-15 18：15：26', '赵六', 3, '东西非常好'),
    ];

    constructor() { }
    // 返回所有的产品信息
    getProducts(): Product[] {
        return this.products;
    }

    // 返回对应id的产品
    getProduct(id: number): Product {
        return this.products.find( (product) => product.id === id);
    }

    // 返回id对应商品的所有评论信息
    getCommentsForProductId(id: number): Comment[] {

        return this.comments.filter( (comment: Comment) => comment.productId == id );
    }

    // 返回所有的产品分类
    getAllCategories(): string[] {
        return ['电子产品', '硬件产品', '软件产品'];
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













