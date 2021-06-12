import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../../controller/service/dim-user.service';
import {DimUser} from '../../../controller/model/dim-user.model';
import {AppComponent} from '../../../app.component';
import {AuthService} from '../../../controller/service/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(
    private userService: DimUserService,
    private appComponent: AppComponent,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  get user(): DimUser {
    return this.authService.user;
  }



}
