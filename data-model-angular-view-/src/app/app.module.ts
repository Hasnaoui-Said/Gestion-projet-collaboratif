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
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './projet/users/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AllTableComponent } from './projet/all-table/all-table.component';
import { CalendarComponent } from './projet/calendar/calendar.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/moment';
import {CommonModule} from '@angular/common';
import {FlatpickrModule} from 'angularx-flatpickr';
import { AproposComponent } from './apropos/apropos.component';
import { UsersModifyComponent } from './projet/users/users-modify/users-modify.component';
import { DimProrityComponent } from './projet/categories/dim-prority/dim-prority.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {ModalModule} from "ngx-bootstrap/modal";
import { ModifyAdminComponent } from './projet/users/modify-admin/modify-admin.component';
import { PopupDialogComponent } from './projet/popup-dialog/popup-dialog.component';
@NgModule({
  declarations: [
    routingsComponents,
    CheckTestComponent,
    UsersComponent,
    UserListComponent,
    ParametresComponent,
    RegisterComponent,
    NavbarComponent,
    AllTableComponent,
    CalendarComponent,
    AproposComponent,
    UsersModifyComponent,
    DimProrityComponent,
    ModifyAdminComponent,
    PopupDialogComponent,

  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModalModule,
    ModalModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


