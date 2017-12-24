import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export abstract class CommonResolve implements Resolve<any>{
	protected router: Router;
	
	resolve(route: ActivatedRouteSnapshot) {};
	protected redirect(url: string = '/') {
		this.router.navigate([url]);
	}
	
}
