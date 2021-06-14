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
  private _searsh: string;

  constructor(private userService: DimUserService) { }

  ngOnInit(): void {
      this.userService.searshUser(this.searsh);
  }
  get users(): Array<DimUser> {
    return this.userService.users;
  }

  public searshUser(): void{
    if (this.searsh === ''){
      this.isExit = 'ce champs est null';
      this.userService.findAll();
    }else {
      this.userService.searshUser(this.searsh);
    }
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

  reloadPage(): void {
    window.location.reload();
  }

  get searsh(): string {
    if (this._searsh == null){
      this._searsh = '';
    }
    return this._searsh;
  }

  set searsh(value: string) {
    this._searsh = value;
  }


  get isExit(): string {
    return this.userService.isExit;
  }

  set isExit(value: string) {
    this.userService.isExit = value;
  }
}
