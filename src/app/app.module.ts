import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './gurads';
import {AuthService} from './services';
import {HttpClientService} from './services/http-client.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {SharedModule} from './modules/shared';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpModule,
        SharedModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        HttpClientService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
