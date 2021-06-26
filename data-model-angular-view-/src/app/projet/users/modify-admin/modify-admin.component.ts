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

  user: DimUser;
  private _state: string;
  private error: string;
  private _isClic: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialog,
              private userService: DimUserService,
  ) {
    this.user = data.userModify;
  }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.closeAll();
  }

  get isClic(): boolean {
    if (this._isClic = null){
      this._isClic = false;
    }
    return this._isClic;
  }

  set isClic(value: boolean) {
    this._isClic = value;
  }

  public updateUser(): void {
    if (this.state = 'active'){
       this.user.state = true;
    }
    else {
        this.user.state = false;
    }
    this.userService.updateUser(this.user).subscribe(
      data => {

      },
      err => {
      }
    );
  }


  get state(): string {
    if (this._state = null){
      this._state = '';
    }
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}
