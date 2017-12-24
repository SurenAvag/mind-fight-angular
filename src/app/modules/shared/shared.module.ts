import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {ButtonComponent} from '../../directives';
import {CheckmarkComponent} from '../../directives';
import {InputGroupComponent} from '../../directives';
import {HeaderComponent} from '../../ui-fragments/header';
import {FooterComponent} from '../../ui-fragments/footer';
import {RouterModule} from '@angular/router';
import {LoaderComponent} from '../../ui-fragments/loader';
import {AboutComponent} from '../../ui-fragments/about';
import {LoginModalComponent} from '../../ui-fragments/login-modal';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		RouterModule
	],
	declarations: [
		CheckmarkComponent,
		ButtonComponent,
		InputGroupComponent,
		HeaderComponent,
		AboutComponent,
		FooterComponent,
		LoaderComponent,
        LoginModalComponent,
		InputGroupComponent
	],
	exports: [
        ReactiveFormsModule,
        CheckmarkComponent,
        CommonModule,
		AboutComponent,
        ButtonComponent,
        InputGroupComponent,
        HeaderComponent,
        FooterComponent,
        FormsModule,
		LoaderComponent,
		LoginModalComponent,
	],
})
export class SharedModule {}
