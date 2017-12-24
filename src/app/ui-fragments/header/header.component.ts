import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from '../../services';
import {User} from '../../models';
import {BaseComponent} from '../../base.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
	public isLoggedIn: boolean = true;
	public user: User;
	public modals = {
		about: 0
	};
	
	constructor(
		private authService : AuthService,
		private router: Router,
	) {
		super();
	}
	
	ngOnInit() {
        this.isLoggedIn = this.authService.isLoggedIn;
        this.subscriptions.push(this.authService.isLoggedState$.subscribe((val: boolean) => {
            this.user = this.authService.getUser();
            this.isLoggedIn = val;
        }));
	}
	
	public logout() : void {
		this.authService.logout();
		this.router.navigate(['/auth/login']);
	}
}
