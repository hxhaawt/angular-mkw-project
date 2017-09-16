import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    // list 为商品列表
    // filterField 为要过滤的字段，如商品 名称 / 内容 / 价格 等
    // keyword 为 过滤的关键字
    transform(list: any[], filterField: string, keyword: string): any {

        if ( !filterField || !keyword) {
            return list;
        }

        return list.filter( item => {
            let Value = item[filterField];

            return Value.indexOf( keyword ) >= 0;
        } );
    }

}
