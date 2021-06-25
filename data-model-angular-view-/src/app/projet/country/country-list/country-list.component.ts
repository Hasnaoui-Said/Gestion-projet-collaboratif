import { Component, OnInit } from '@angular/core';
import {DimCountryService} from '../../../controller/service/dim-country.service';
import {DimCategorieService} from '../../../controller/service/dim-categorie.service';
import {DimUserService} from '../../../controller/service/dim-user.service';
import {DimStateService} from '../../../controller/service/dim-state.service';
import {FctEmailDateService} from '../../../controller/service/fct-email-date.service';
import {DimCountry} from '../../../controller/model/dim-country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private countryService: DimCountryService,
  ) { }

  ngOnInit(): void {
    this.countryService.findAll();
  }

  get countrys(): Array<DimCountry> {
    return this.countryService.countrys;
  }

}
