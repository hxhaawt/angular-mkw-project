import { ProductService } from './../shared/product.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    // 这是响应式表单结构

    formModel: FormGroup;
    categories: string[];

    constructor(
        private productService: ProductService
    ) {
        let fb = new FormBuilder();
        this.formModel = fb.group({
            title: ['', Validators.minLength(3)],
            price: [null, this.positiveNumberValidator],
            category: ['-1']
        });
     }

    ngOnInit() {
        this.categories = this.productService.getAllCategories();
    }

    // 校验器--检验数据要为正数
    positiveNumberValidator(control: FormControl): any {
        if ( !control.value ) {
            return null;
        }

        const price = parseInt(control.value);
        if ( price > 0 ) {
            return null;
        } else {
            return {positiveNumber: true};
        }
    }

    onSearch() {
       if (  this.formModel.valid ) {

           console.log(  this.formModel.value );

           // 发射 searchEvent 流事件，定阅有这个流事件的组件会作相应的处理
           this.productService.searchEvent.emit( this.formModel.value );
       }
    }


}


























