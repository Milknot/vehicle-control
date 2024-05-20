import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import MobileNavComponent from './core/mobile-nav/mobile-nav.component';

import DashboardComponent from './shared/administrator/vehicle/dashboard/dashboard.component';
import GasolineRechargeComponent from './shared/administrator/vehicle/gasoline-recharge/gasoline-recharge.component';
import LoginComponent from './shared/login/login.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GasolineRechargeComponent,
        DashboardComponent,
        BrowserAnimationsModule,
        HttpClientModule,
        MobileNavComponent,
        LoginComponent
    ],
    exports: [
        FormsModule,
    ],
    providers: [FormsModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
