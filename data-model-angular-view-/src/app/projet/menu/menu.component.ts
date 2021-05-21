import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../controller/service/dim-user.service';
import {DimUser} from '../../controller/model/dim-user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: DimUserService) { }

  ngOnInit(): void {
  }
  get user(): DimUser {
    return this.userService.user;
  }

  public  logoutUser(){
    this.booleans = false;
    this.userService.logoutUser;
  }

  get booleans(): boolean {
    return this.userService.booleans;
  }
  set booleans(value: boolean){
     this.userService.booleans;
  }

}

