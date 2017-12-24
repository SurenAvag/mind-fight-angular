import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login';
import {AuthComponent} from './auth';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared';
import {FormModule} from '../shared/form.module';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        FormModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
    ]
})
export class AuthModule { }
