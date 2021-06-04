import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../controller/service/dim-user.service';
import {UserService} from "../../controller/service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private userService: UserService,
              private dimUserService: DimUserService
  ) { }

  ngOnInit(): void {
  }


  get isLoggedIns(): boolean {
    return this.userService.isLoggedIns;
  }

  set isLoggedIns(value: boolean) {
    this.userService.isLoggedIns = value;
  }

  get booleans(): boolean {
    return this.dimUserService.booleans;
  }
  get clic(): boolean {
    return this.dimUserService.clic;
  }
  set clic(value: boolean) {
    this.clic=true;
     this.dimUserService.clic;
  }

}
