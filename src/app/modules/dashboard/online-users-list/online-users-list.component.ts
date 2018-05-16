import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SocketService} from '../../../services/socket.service';
import {BaseComponent} from '../../../base.component';
import {User} from '../../../models';
import {AuthService} from '../../../services';

@Component({
  selector: 'app-online-users-list',
  templateUrl: './online-users-list.component.html',
  styleUrls: ['./online-users-list.component.scss']
})
export class OnlineUsersListComponent extends BaseComponent implements OnInit {
    @Output() public userSelect: EventEmitter<User> = new EventEmitter<User>();
    public users: User[];
    public authUser: User;
    public selectedUser: User;
    constructor(
        private socketService: SocketService,
        private authService: AuthService
    ) {
        super();
    }
    
    ngOnInit() {
        this.authUser = this.authService.getUser();
        this.initSubscriptions();
    }
    
    public initSubscriptions(): void {
        this.setOnlineUsers(this.socketService.onlineUsers);
    
        this.socketService.socket$.subscribe(val => {
        
            if(val.name == 'online-user-list-changed') {
                this.setOnlineUsers(val.message);
            }
        })
    }
    
    public setOnlineUsers(users: User[]): void {
        this.users = users;
    }
    
    public userSelected(user: User) : void {
        this.selectedUser = user;
        this.userSelect.emit(user);
    }
    
}
