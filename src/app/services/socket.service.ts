import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import * as io from "socket.io-client";
import {User} from '../models';

@Injectable()
export class SocketService {
    public socketClient: any;
    private socketUrl: any;
    public onlineUsers: User[];
    private socketSubject = new Subject<any>();
    public socket$ = this.socketSubject.asObservable();


    constructor() {
        this.socketUrl = environment.socketUrl;
    }
    
    public initialize(token: string): void {
        if (!this.socketClient) {
            this.socketClient = io.connect(this.socketUrl, {query: {accessToken: token}});
            this.socketClient.on("connect", (msg: any) => {
                this.socketSubject.next({name: 'connect', message: 'user connected'});
            });
            this.socketClient.on('disconnect', () => {
                console.log('user disconnected');
            });
            this.onlineUserListChanged();
        }
    }
    
    public disconnectFromSocket(): void {
        this.socketClient && this.socketClient.disconnect();
        this.socketClient = null;
    }
    
    public onlineUserListChanged(): void {
        this.socketClient.on(`online-user-list-changed`, (res: any) => {
            this.onlineUsers = User.transformCollection(res);
            this.socketSubject.next({name: 'online-user-list-changed', message: this.onlineUsers});
        });
    }
}


