import { Component, OnInit } from '@angular/core';
import {DimCountryService} from '../../../controller/service/dim-country.service';
import {DimCategorieService} from '../../../controller/service/dim-categorie.service';
import {DimUserService} from '../../../controller/service/dim-user.service';
import {DimStateService} from '../../../controller/service/dim-state.service';
import {FctEmailDateService} from '../../../controller/service/fct-email-date.service';
import {DimCountry} from '../../../controller/model/dim-country.model';
import {DimCategorie} from '../../../controller/model/dim-categorie.model';
import {DimUser} from '../../../controller/model/dim-user.model';
import {DimEmailState} from '../../../controller/model/dim-email-state.model';
import {FctEmailData} from '../../../controller/model/fct-email-data.model';

@Component({
  selector: 'app-fct-email-data-detail',
  templateUrl: './fct-email-data-detail.component.html',
  styleUrls: ['./fct-email-data-detail.component.css']
})
export class FctEmailDataDetailComponent implements OnInit {

  private _searsh: string;
  public page = 1;
  public pageSize = 5;

  constructor(private countryService: DimCountryService,
              private categoriesService: DimCategorieService,
              private userService: DimUserService ,
              private stateService: DimStateService,
              private fctEmailDateService: FctEmailDateService
  ) { }

  ngOnInit(): void {
    this.fctEmailDateService.findAll();
    this.countryService.findAll();
    this.categoriesService.findAll();
    this.stateService.findAll();
    this.userService.findAll();
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
  get states(): Array<DimEmailState> {
    return this.stateService.states;
  }


  get emailData(): FctEmailData {
    return this.fctEmailDateService.emailData;
  }


  get emailDatas(): Array<FctEmailData> {
    return this.fctEmailDateService.emailDatas;
  }


  public searshEmail(): void{
    if (this.searsh === ''){
      this.isExit = 'ce champs est null';
      this.fctEmailDateService.findAll();
    }else {
      this.fctEmailDateService.searshEmail(this.searsh);
    }
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
    return this.fctEmailDateService.isExit;
  }

  set isExit(value: string) {
    this.fctEmailDateService.isExit = value;
  }

}
