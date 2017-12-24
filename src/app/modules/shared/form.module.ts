import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared.module";
import {ValidationService} from "../../services/validation.service";
import {ControlMessagesComponent} from '../../directives/control-messages';
import {LoginModalComponent} from '../../ui-fragments/login-modal';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
	],
	declarations: [
		ControlMessagesComponent,
    ],
	exports: [
		ControlMessagesComponent,
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
	],
	providers: [
		ValidationService,
	],
})
export class FormModule { }
