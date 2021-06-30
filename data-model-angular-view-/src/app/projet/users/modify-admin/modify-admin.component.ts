import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {DimUser} from '../../../controller/model/dim-user.model';
import {DimUserService} from "../../../controller/service/dim-user.service";

@Component({
  selector: 'app-modify-admin',
  templateUrl: './modify-admin.component.html',
  styleUrls: ['./modify-admin.component.css']
})
export class ModifyAdminComponent implements OnInit {

  private _user: DimUser;
  public state: 'null';
  private _status: string;
  public _error: string;
  public _isClic: boolean;
  public _boo: boolean;
  activer: any;
  Desactiver: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialog,
              private userService: DimUserService,
  ) {
    this.user = data.userModify;
  }

  ngOnInit(): void {
    this.userService.findAll();
  }
  closeDialog(){
    this.dialogRef.closeAll();
    this.userService.findAll();
  }
  reloadPage(): void {
    window.location.reload();
  }
  get isClic(): boolean {
    if (this._isClic == null){
      this._isClic = false;
    }
    return this._isClic;
  }

  set isClic(value: boolean) {
    this._isClic = value;
  }

  public active(): void {
    this.boo = true;
  }
  public inactive(): void {
    this.boo = false;
  }

  public updateUser(): void {
    this.isClic = true;
      this.userService.updateUsers( this.boo, this._user).subscribe(
        data => {
          this.error = " mise a jour effectue";
        },
        err => {
          this.error = " erreur : l'utilisateur n'exist pas";
        }
      );
      console.log('mesge' + this.error);
  }


  get user(): DimUser {
    if (this._user == null){
      this._user = new DimUser();
    }
    return this._user;
  }

  set user(value: DimUser) {
    this._user = value;
  }

  get status(): string {
    if (this._status == null){
      this._status = 'test';
    }
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get boo(): boolean {
    if (this._boo == null){
      this._boo = false;
    }
    return this._boo;
  }

  set boo(value: boolean) {
    this._boo = value;
  }

  get error(): string {
    if (this._error == null){
      this._error = '';
    }
    return this._error;
  }

  set error(value: string) {
    this._error = value;
  }

}
