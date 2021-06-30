import { Component, OnInit } from '@angular/core';
import {DimCountryService} from '../../../controller/service/dim-country.service';
import {DimCountry} from '../../../controller/model/dim-country.model';
import {DimCategorie} from '../../../controller/model/dim-categorie.model';
import {DimCategorieService} from '../../../controller/service/dim-categorie.service';
import {DimUserService} from '../../../controller/service/dim-user.service';
import {DimStateService} from '../../../controller/service/dim-state.service';
import {DimEmailState} from '../../../controller/model/dim-email-state.model';
import {DimUser} from '../../../controller/model/dim-user.model';
import {FctEmailDateService} from '../../../controller/service/fct-email-date.service';
import {FctEmailData} from '../../../controller/model/fct-email-data.model';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog} from '@angular/material/dialog';
import {PopupDialogComponent} from '../../popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-fct-email-data',
  templateUrl: './fct-email-data.component.html',
  styleUrls: ['./fct-email-data.component.css']
})
export class FctEmailDataComponent implements OnInit {

  public _responses: string;
  public _stringin: string;
  constructor(private countryService: DimCountryService,
              private categoriesService: DimCategorieService,
              private userService: DimUserService ,
              private stateService: DimStateService,
              private fctEmailDateService: FctEmailDateService,
              private config: NgbModalConfig,
              private modalService: NgbModal,
              private dialogRef: MatDialog
              ) { }

  ngOnInit(): void {
    this.countryService.findAll();
    this.categoriesService.findAll();
    this.stateService.findAll();
    this.userService.findAll();
  }

  public saveTest(){
    return this.fctEmailDateService.saveTest();
  }
  public save(): void {
    this.emailData.user_id.username = this.user.username;
    this.fctEmailDateService.save().subscribe(
      data => {
        if (data > 0) {
          this.emailDatas.push(this.clone(this.emailData));
          this.openDialog('e_mail save');
          this.fctEmailDateService.emailData = null;
        }
      }, error => {
        this.openDialog('e_mail deja exist');
      }
    );
  }


  openDialog(value: string){
    this.dialogRef.open(PopupDialogComponent, {
      data : {
        userModify: value
      }
    });
  }
  get countrys(): Array<DimCountry> {
    return this.countryService.countrys;
  }
  get categories(): Array<DimCategorie> {
    return this.categoriesService.categories;
  }
  get users(): Array<DimUser> {
    return this.userService.users;
  }
  get user(): DimUser {
    return this.userService.user;
  }
  get states(): Array<DimEmailState> {
    return this.stateService.states;
  }


  get emailData(): FctEmailData {
    return this.fctEmailDateService.emailData;
  }


  get emailDatas(): Array<FctEmailData> {
    return this.fctEmailDateService.emailDatas;
  }

  get isExist(): string {
    return this.fctEmailDateService.isExist;
  }


   public clone(emailData: FctEmailData) {
    const cloneEmail = new FctEmailData();
    cloneEmail.email = emailData.email;
    cloneEmail.phone = emailData.phone;
    cloneEmail.city = emailData.city;
    cloneEmail.firmaName = emailData.firmaName;
    cloneEmail.codePost = emailData.codePost;
    cloneEmail.cat_id.name = emailData.cat_id.name;
    cloneEmail.ct_id.reference = emailData.ct_id.reference;
    cloneEmail.state_id.name = emailData.state_id.name;
    cloneEmail.user_id.username = emailData.user_id.username;
    return cloneEmail;
  }

  get responses(): string {
    if (this._responses == null){
    this._responses = '';
    }
    return this._responses;
  }

  set responses(value: string) {
    this._responses = value;
  }
  get stringin(): string {
    if (this._stringin == null){
    this._stringin = '';
    }
    return this._stringin;
  }

  set stringin(value: string) {
    this._stringin = value;
  }
}
