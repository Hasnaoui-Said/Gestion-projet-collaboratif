import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../controller/service/dim-user.service';
import {DimUser} from '../../controller/model/dim-user.model';
import {AppComponent} from '../../app.component';
import {AuthService} from '../../controller/service/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private _userName: string;
  constructor(
    private userService: DimUserService,
    private appComponent: AppComponent,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.isLogged){
      console.log('it s me find by username dim profile ' + this.userName);
      this.authService.findByUsername(this.userName);
    }else if (!this.isLogged){
      console.log('notFounded ++ ');
    }
  }
  get user(): DimUser {
    return this.authService.user;
  }

  get isLogged(): boolean {
    return this.appComponent.isLogged;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }
}
