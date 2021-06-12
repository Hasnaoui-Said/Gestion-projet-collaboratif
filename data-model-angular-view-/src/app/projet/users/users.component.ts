import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../controller/service/dim-user.service';
import {AppComponent} from '../../app.component';
import {AuthService} from '../../controller/service/auth.service';
import {DimUser} from '../../controller/model/dim-user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
