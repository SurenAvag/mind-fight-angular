import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './auth';
import {LoginComponent} from './login';


const authRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                component: LoginComponent,
            },
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AuthRoutingModule { }
