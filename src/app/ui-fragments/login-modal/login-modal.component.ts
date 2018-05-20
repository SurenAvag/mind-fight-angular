import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';

@
    Component({
	selector: 'login-modal',
	templateUrl: './login-modal.component.html',
	styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
	@Input() public opened: boolean;
	@Input() public width: number = 390;
	@Input() public height: number;
	@Input() public top: string;
	@Input() public overflowUnset: boolean;
	@Output() public close: EventEmitter<boolean> = new EventEmitter();
	constructor() { }
	
	ngOnInit() {}
	
	ngOnChanges(changes: SimpleChanges): void {
		if(changes.hasOwnProperty('opened') && !changes['opened'].firstChange) {
			if(this.opened) {
				document.body.classList.add('no-scroll');
			} else {
				document.body.classList.remove('no-scroll');
			}
		}
	}
	
	public closeModal(event) : void {
		if(event.target == event.currentTarget ||
			(<HTMLElement>event.target).hasAttribute('data-closeModal')){
			document.body.classList.remove('no-scroll');
			this.opened = false;
			this.close.emit(true);
		}
	}
}
