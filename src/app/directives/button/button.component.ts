import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input() public width: string  = '';
	@Input() public height: string  = '';
	@Input() public classList: string  = '';
	@Input() public type: string = 'primary';
	constructor() { }
	
	ngOnInit() {
	}

}
