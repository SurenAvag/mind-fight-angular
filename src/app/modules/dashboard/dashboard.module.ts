import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { MainComponent } from './main';
import {UserService} from './user/services';
import {SharedModule} from '../shared';
import {LoggedInModule} from '../shared/logged-in.module';
import {FormModule} from '../shared/form.module';
import {TournamentTableComponent} from './tournament-table/tournament-table.component';
import { StartGameComponent } from './start-game/start-game.component';
import { OnlineUsersListComponent } from './online-users-list/online-users-list.component';
import { GameInvitationComponent } from './game-invitation/game-invitation.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        LoggedInModule,
        FormModule,
    ],
    declarations: [
        DashboardComponent,
        MainComponent,
        TournamentTableComponent,
        StartGameComponent,
        OnlineUsersListComponent,
        GameInvitationComponent
    ],
    providers: [
        UserService
    ]
})
export class DashboardModule { }
