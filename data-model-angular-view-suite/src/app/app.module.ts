import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IfrozetComponent } from './uniNfz/ifrozet/ifrozet.component';
import { LoginComponent } from './uniNfz/login/login.component';
import { HomeComponent } from './uniNfz/ifrozet/home/home.component';
import { DashboardComponent } from './uniNfz/ifrozet/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    IfrozetComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
