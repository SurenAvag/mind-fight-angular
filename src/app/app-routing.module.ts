import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './gurads';
import {AppComponent} from './app.component';


const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [ AuthGuard ]
    },
    {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule',
        canActivate: [ AuthGuard ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }
