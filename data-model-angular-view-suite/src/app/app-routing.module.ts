import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./uniNfz/ifrozet/home/home.component";
import {LoginComponent} from "./uniNfz/login/login.component";

export const  routingsComponents = [];

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
