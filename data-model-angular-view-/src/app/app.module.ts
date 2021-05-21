import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, NgForm} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule, routingsComponents} from './app-routing.module';


@NgModule({
  declarations: [
    routingsComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


