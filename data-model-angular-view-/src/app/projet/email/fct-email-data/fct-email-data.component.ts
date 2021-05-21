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

@Component({
  selector: 'app-fct-email-data',
  templateUrl: './fct-email-data.component.html',
  styleUrls: ['./fct-email-data.component.css']
})
export class FctEmailDataComponent implements OnInit {

  constructor(private countryService: DimCountryService,
              private categoriesService: DimCategorieService,
              private userService: DimUserService ,
              private stateService: DimStateService,
              private fctEmailDateService: FctEmailDateService
              ) { }

  ngOnInit(): void {
    this.countryService.findAll();
    this.categoriesService.findAll();
    this.stateService.findAll();
    this.userService.findAll();
  }

  public save(){
    this.emailData.user_id.userName = this.user.userName;
    return this.fctEmailDateService.save();
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


}
