import { Component, OnInit } from '@angular/core';
import {DimUser} from '../../../controller/model/dim-user.model';
import {DimUserService} from '../../../controller/service/dim-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private _stateUser: string;
  private _stateuser: Array<DimUser>;

  constructor(private userService: DimUserService) { }

  ngOnInit(): void {
    this.userService.findAll();
    this.stateUser = 'inactive';
    /*for (const user of this.users){
      if (user.state === 'active'){
        this.stateUser = 'active';
      }else if (user.state === 'inactive') {
        this.stateUser = 'inactive';
      }else {
        this.stateUser = '';
      }
    }*/
  }
  get users(): Array<DimUser> {
    return this.userService.users;
  }

  get stateUser(): string {
    if (this._stateUser == null){
      this._stateUser = '';
    }
    return this._stateUser;
  }

  set stateUser(value: string) {
    this._stateUser = value;
  }


  get stateuser(): Array<DimUser> {
    if (this._stateuser == null){
      this._stateuser = new Array<DimUser>();
    }
    return this._stateuser;
  }

  set stateuser(value: Array<DimUser>) {
    this._stateuser = value;
  }
}
