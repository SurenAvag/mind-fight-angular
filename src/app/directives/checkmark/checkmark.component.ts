import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BaseComponent} from "../../base.component";
import {checkmarkTypes} from '../../constants';

@Component({
  selector: 'checkmark',
  templateUrl: './checkmark.component.html',
  styleUrls: ['./checkmark.component.scss']
})
export class CheckmarkComponent extends BaseComponent implements OnInit {
	@Input() public checked: boolean = false;
	@Input() public submitted: boolean = false;
	@Input() public clickable: boolean = false;
	@Input() public color: string = '';
	@Input() public type: number = checkmarkTypes.selectedable;
	@Output() public toggle: EventEmitter<boolean> = new EventEmitter();
	constructor() {
		super();
	}
	
	ngOnInit() {
	}
	
	public toggleCheck(value: boolean): void{
		if(this.clickable) {
			this.toggle.emit(value);
		}
	}

}
