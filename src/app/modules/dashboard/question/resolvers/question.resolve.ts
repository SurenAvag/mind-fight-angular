import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Response} from "@angular/http";
import {CommonResolve} from "../../../../resolvers/common.resolve";
import {QuestionService} from '../services';
import {Question} from '../models';

@Injectable()
export class QuestionResolve extends CommonResolve {
	constructor(
		private questionService: QuestionService,
	    protected router: Router
	) {
		super();
	}
	
	resolve(route: ActivatedRouteSnapshot) {
		return this.questionService.getQuestion(route.params['id'])
			.then((question: Question) => {
				return question;
			})
			.catch((e: Response) => {
				this.redirect();
			})
	}
}
