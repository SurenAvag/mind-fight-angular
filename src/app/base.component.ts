import {OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import * as constants from "./constants";

export abstract class BaseComponent implements OnInit, OnDestroy{
	public modals = {};
	public subscriptions: Subscription[] = [];
	
	ngOnInit() {}
	
	public openModal(modalName: string) : void {
		this.modals[modalName]++;
	}
	
	protected getDateNow() : string {
		let date = new Date;
		return [date.getMonth()+1,
				date.getDate(),
				date.getFullYear()].join('/')+' '+
			[date.getHours(),
				date.getMinutes(),
				date.getSeconds()].join(':');
	}
	
	ngOnDestroy() {
		this.subscriptions.forEach((sub: Subscription) => {
			sub.unsubscribe();
		})
	}
	
	public constant(name: string): any {
		return constants[name];
	}
}
