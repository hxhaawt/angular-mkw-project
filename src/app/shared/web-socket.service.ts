import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class WebSocketService {
    ws: WebSocket;

    constructor() { }

    createObservableSocket(url: string, id: number): Observable<any> {
        // 发送一个连接到服务器
        this.ws = new WebSocket(url);

        return new Observable<string>(

            observer => {
                this.ws.onmessage = (event) => observer.next(event.data);
                this.ws.onerror = (event) => observer.error(event);
                this.ws.onclose = (event) => observer.complete();
                this.ws.onopen = (event) => this.sendMessage({productId: id});

                return () => this.ws.close();
            }
        ).map( (message) => JSON.parse(message) );
    }

    // 向服务器发送消息
    sendMessage(message: any) {
        // ws 发送的只能是字符串
        this.ws.send(JSON.stringify(message));
    }

}














