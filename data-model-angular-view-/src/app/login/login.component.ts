import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../controller/service/dim-user.service';
import {DimUser} from '../controller/model/dim-user.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: DimUserService) { }

  ngOnInit(): void {
  }
  get user(): DimUser {
    return this.userService.user;
  }

  public  loginUser(){
    this.userService.loginUser(this.user);
  }

  get msg(): string {
    return this.userService.msg;
  }
  get booleans(): boolean {
    return this.userService.booleans;
  }
}
