import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {inputTypes} from '../../constants';

@Component({
  selector: 'input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {
	@Input() public type: number = inputTypes.text;
	@Input() public name: string = '';
	@Input() public displayBy: string = '';
	@Input() public value: string | number | boolean;
	@Input() public disabled: boolean;
	@Output() public saving: EventEmitter<string | number | boolean> = new EventEmitter();
	public inputTypes = inputTypes;
	constructor() { }
	
	ngOnInit() {
	}
	
	public saveItem(): void {
		this.saving.emit(this.value);
	}
	
	public toggleValue(): void {
		this.value = !this.value;
		this.saveItem();
	}
}
