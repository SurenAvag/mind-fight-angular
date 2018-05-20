import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
import * as io from "socket.io-client";
import {Game, User} from '../models';
import {AuthService} from './auth.service';
import {GameEnded} from '../modules/dashboard/game/interfaces/game-ended';

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
            
            this.onConnect();
            this.onDisconnect();
            this.onlineUserListChanged();
            this.onGameInvitation();
            this.onGameDeleted();
            this.onGameStarted();
            this.onGameEnded();
        }
    }
    
    public onGameStarted(): void {
        this.socketClient.on(`game-started`, (res: any) => {
            this.socketSubject.next({
                name: 'game-started', message: {
                    user: User.transform(res.user),
                    game: Game.transform(res.game),
                }
            });
        });
    }
    
    public onGameEnded(): void {
        this.socketClient.on(`game-ended`, (res: GameEnded) => {
            this.socketSubject.next({name: 'game-ended', message: res});
        });
    }
    
    public onDisconnect(): void {
        this.socketClient.on('disconnect', () => {
            console.log('user disconnected');
        });
    }
    
    public onConnect(): void {
        this.socketClient.on("connect", (msg: any) => {
            this.socketSubject.next({name: 'connect', message: 'user connected'});
        });
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
    
    public onGameDeleted(): void {
        this.socketClient.on(`game-deleted`, (res: any) => {
            if(res.deletedByUser.id != User.authUser.id) {
                this.socketSubject.next({
                    name: 'game-deleted', message: {
                        deletedByUser: User.transform(res.deletedByUser),
                        game: Game.transform(res.game),
                    }
                });
            }
        });
    }
    
    
    
    public onGameInvitation(): void {
        this.socketClient.on(`game-invitation`, (res: any) => {
            this.socketSubject.next({name: 'game-invitation', message: {
                    user: User.transform(res.user),
                    invitedUser: User.transform(res.invitedUser),
                    game: Game.transform(res.game),
                }
            });
        });
    }
}


