import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Response} from "@angular/http";
import {CommonResolve} from "../../../../resolvers/common.resolve";
import {SubjectService} from '../services/subject.service';
import {Subject} from '../models';

@Injectable()
export class SubjectResolve extends CommonResolve {
	constructor(
		private subjectService: SubjectService,
	    protected router: Router
	) {
		super();
	}
	
	resolve(route: ActivatedRouteSnapshot) {
		return this.subjectService.getSubject(route.params['id'])
			.then((subject: Subject) => {
				return subject;
			})
			.catch((e: Response) => {
				this.redirect();
			})
	}
}
