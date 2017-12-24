import { Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import {ValidationService} from '../../services';

@Component({
    selector: 'control-messages',
    styleUrls: ['./control-messages.scss'],
    template: `
  	<div class="error-message {{className}}" *ngIf="errorMessage !== null">{{errorMessage}}</div>
  `
})
export class ControlMessagesComponent {
    @Input() public control: FormControl;
    @Input() public submitted: boolean;
    @Input() public className: string = '';
    
    constructor() {}
    
    get errorMessage() {
        if(!this.control) return null;
        for (let propertyName in this.control.errors) {
            if (this.submitted || this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName);
            }
        }
        return null;
    }
}
