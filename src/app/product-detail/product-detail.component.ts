import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Comment} from '../shared/product.service'

// 星星默认显示个数
const RATING_MAX: number = 5;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    // 当前产品的信息
    public product: Product;
    // 当前产品的评价，是一个数组信息
    public comments: Comment[];
    // 新提交评价时的星星数，默认为5星
    newRating: number = RATING_MAX;
    // 新提交的评价内容
    newComment: string = '';
    // 默认让评价框隐藏
    isCommentHidden: boolean = true;

    constructor(
        private routeInfo: ActivatedRoute,
        private productService: ProductService
    ) { }

    ngOnInit() {

        const productId: number = this.routeInfo.snapshot.params['productId'];

        this.product = this.productService.getProduct( productId );
        this.comments = this.productService.getCommentsForProductId( productId );
    }


    addComment() {
        const comment: Comment = new Comment(
            0
            , this.product.id
            , new Date().toISOString()
            , 'someone'
            , this.newRating
            , this.newComment);

        this.comments.unshift(comment);

        // 重新计算商品的评价星级
        const sum = this.comments.reduce( (sum, comment) => sum + comment.rating, 0);
        // this.product.rating = Math.round( sum / this.comments.length );
        this.product.rating = sum / this.comments.length;

        // 自动复位输入框
        this.newComment = null;
        this.newRating = RATING_MAX;
        this.isCommentHidden = true;
    }

}

















