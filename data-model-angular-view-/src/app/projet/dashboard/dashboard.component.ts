import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../controller/service/dim-user.service';
import {DimUser} from '../../controller/model/dim-user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: DimUserService) { }

  ngOnInit(): void {
  }
  get user(): DimUser {
    return this.userService.user;
  }

  public  logoutUser(){
    this.userService.loginUser(this.user);
  }

  get booleans(): boolean {
    return this.userService.booleans;
  }

}
