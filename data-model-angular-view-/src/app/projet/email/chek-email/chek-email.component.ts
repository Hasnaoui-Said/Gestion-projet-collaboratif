import {Component, OnInit} from '@angular/core';
import {FctEmailData} from '../../../controller/model/fct-email-data.model';
import {FctEmailDateService} from '../../../controller/service/fct-email-date.service';
import {DimUserService} from '../../../controller/service/dim-user.service';

@Component({
  selector: 'app-chek-email',
  templateUrl: './chek-email.component.html',
  styleUrls: ['./chek-email.component.css']
})
export class ChekEmailComponent implements OnInit {
  private _cleccheked: boolean;
  private _isNull: boolean;

  constructor(private fctEmailDateService: FctEmailDateService , private userService: DimUserService) {
  }

  get cleccheked(): boolean {
    if (this._cleccheked == null){
      this._cleccheked = false;
    }
    return this._cleccheked;
  }

  set cleccheked(value: boolean) {
    this._cleccheked = value;
  }

  ngOnInit(): void {
  }

  get user() {
    return  this.userService.user;
  }

  get emailData(): FctEmailData {
    return this.fctEmailDateService.emailData;
  }

  get emailDataReturn(): FctEmailData {
    return this.fctEmailDateService.emailDataReturn;
  }

  public checked() {
    this.cleccheked = true;
    return this.fctEmailDateService.checked();
  }

  public clear() {
    return this.fctEmailDateService.clear();
  }

  public return() {
    return this.fctEmailDateService.return();
  }
}
