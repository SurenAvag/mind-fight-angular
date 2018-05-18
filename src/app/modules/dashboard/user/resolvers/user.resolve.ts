import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Response} from "@angular/http";
import {CommonResolve} from "../../../../resolvers/common.resolve";
import {UserService} from '../services';
import {User} from '../../../../models';

@Injectable()
export class UserResolve extends CommonResolve {
	constructor(
		private userService: UserService,
	    protected router: Router
	) {
		super();
	}
	
	resolve(route: ActivatedRouteSnapshot) {
		return this.userService.getUser(route.params['id'])
			.then((user: User) => {
				return user;
			})
			.catch((e: Response) => {
				this.redirect();
			})
	}
}
