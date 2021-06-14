import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule, routingsComponents} from './app-routing.module';
import { CheckTestComponent } from './projet/email/check-test/check-test.component';
import { UsersComponent } from './projet/users/users.component';
import { UserListComponent } from './projet/users/user-list/user-list.component';
import { ParametresComponent } from './projet/parametres/parametres.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './projet/users/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    routingsComponents,
    CheckTestComponent,
    UsersComponent,
    UserListComponent,
    ParametresComponent,
    RegisterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


