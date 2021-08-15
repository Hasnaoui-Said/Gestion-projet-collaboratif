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
  private _isNull: boolean;

  constructor(private fctEmailDateService: FctEmailDateService , private userService: DimUserService) {
  }

  get cleccheked(): boolean {
    return this.fctEmailDateService.cleccheked;
  }

  set cleccheked(value: boolean) {
    this.fctEmailDateService.cleccheked = value;
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

  public checked() {/*
    this.emailDataReturn.part = 0;
    this.emailDataReturn.versandCounte = 0;*/
    this.cleccheked = false;
    return this.fctEmailDateService.checked();
  }
  public checkedtest() {
    this.cleccheked = true;
    return this.fctEmailDateService.checkedtest();
  }

  public clear() {
    return this.fctEmailDateService.clear();
  }

  public return() {
    return this.fctEmailDateService.return();
  }
}
