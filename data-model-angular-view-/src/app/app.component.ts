import { Component } from '@angular/core';
import {DimUserService} from './controller/service/dim-user.service';
import {DimUser} from './controller/model/dim-user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-model-angular-view';
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
