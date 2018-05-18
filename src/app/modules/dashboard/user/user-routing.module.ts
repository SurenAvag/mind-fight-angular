import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserSingleComponent} from './user-single/user-single.component';
import {UserAnalyticsComponent} from './user֊analytics/user֊analytics.component';
import {UserListingComponent} from './user֊listing/user֊listing.component';
import {UserResolve} from './resolvers/user.resolve';


const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: '',
                component: UserListingComponent
            },
            {
                path: ':id',
                component: UserSingleComponent,
                resolve: {
                    user: UserResolve
                }
            },
            {
                path: ':id/analytics',
                component: UserAnalyticsComponent,
                resolve: {
                    user: UserResolve
                }
            },
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class UserRoutingModule { }
