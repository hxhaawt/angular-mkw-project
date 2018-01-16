import { Component, Input, OnInit, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

    @Input()
    public rating: number = 0;
    // 星星显示个数以及显示状态
    private stars: boolean [];
    // 星星默认是只读的，不能点击
    @Input()
    public readonly: boolean = true;

    // 发射事件，让父级组件更新UI
    // ratingChange名字和rating对应，父级就可以这样用 [(rating)]='newRating'
    @Output()
    private ratingChange: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() {

    }

    // 输入属性的值rating变化时，会自动执行这个函数
    ngOnChanges(changes: SimpleChanges): void {

        this.initStars();
    }

    // 初始化星星显示数组的值
    initStars() {
        this.stars = [];
        // stars中的值为 true时显示空心星星
        for (let i = 1; i < 6; i++) {
            this.stars.push(i > Math.round(this.rating));
        }
    }

    // 点击组件处理函数
    clickStar(index: number) {

        // 当星星组件处理可点击状态
        if ( !this.readonly ) {
            this.rating = index + 1;

            // 发射事件，让父组件更新显示
            this.ratingChange.emit(this.rating);
        }
    }

}
