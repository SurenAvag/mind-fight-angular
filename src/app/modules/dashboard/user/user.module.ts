import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserAnalyticsComponent } from './user֊analytics/user֊analytics.component';
import {UserListingComponent } from './user֊listing/user֊listing.component';
import {UserRoutingModule} from './user-routing.module';
import {UserResolve} from './resolvers/user.resolve';
import {UserService} from './services';
import {SharedModule} from '../../shared';

import {LoggedInModule} from '../../shared/logged-in.module';
import {DropdownModule} from 'primeng/dropdown';
import {SubjectService} from '../subject/services/subject.service';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        LoggedInModule,
        DropdownModule
    ],
    declarations: [
        UserComponent,
        UserSingleComponent,
        UserAnalyticsComponent,
        UserListingComponent,
    ],
    providers: [
        UserResolve,
        UserService,
        SubjectService
    ]
})
export class UserModule { }
