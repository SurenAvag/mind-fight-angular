import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../base.component';
import {User, UserItems} from '../../../models/index';
import {UserService} from '../user/services';
import {AuthService} from '../../../services';

@Component({
  selector: 'app-tournament-table',
  templateUrl: './tournament-table.component.html',
  styleUrls: ['./tournament-table.component.scss']
})
export class TournamentTableComponent extends BaseComponent implements OnInit {
    public users: User[];
    public authUser: User;
    public loading: boolean = true;
    constructor(
        private userService: UserService,
        private authService: AuthService,
    ) {
         super();
    }

    ngOnInit() {
        this.getUsers();
        this.authUser = this.authService.getUser();
    }

    private getUsers(): void {
        this.userService.getUsers()
            .then((res: UserItems) => {
                this.users = res.items;
                this.loading = false;
            })
            .catch((e: string) => {
                console.log(e);
            });
    }

}
