import { Component, OnInit } from '@angular/core';
import {DimCountry} from '../../../controller/model/dim-country.model';
import {DimCountryService} from '../../../controller/service/dim-country.service';
import {DimCategorieService} from '../../../controller/service/dim-categorie.service';
import {DimUserService} from '../../../controller/service/dim-user.service';
import {DimStateService} from '../../../controller/service/dim-state.service';
import {FctEmailDateService} from '../../../controller/service/fct-email-date.service';
import {AuthService} from '../../../controller/service/auth.service';
import {DimUser} from '../../../controller/model/dim-user.model';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-modify',
  templateUrl: './users-modify.component.html',
  styleUrls: ['./users-modify.component.css']
})
export class UsersModifyComponent implements OnInit {
  isActive: boolean;

  constructor(private countryService: DimCountryService,
              private categoriesService: DimCategorieService,
              private userService: DimUserService ,
              private stateService: DimStateService,
              private fctEmailDateService: FctEmailDateService,
              private authService: AuthService,
              private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.countryService.findAll();
    this.categoriesService.findAll();
    this.stateService.findAll();
    this.userService.findAll();

    if (this.user.state === 'active'){
      this.isActive = true;
    }else{
      this.isActive = false;
    }
  }


  get user(): DimUser {
    return this.authService.user;
  }


  get countrys(): Array<DimCountry> {
    return this.countryService.countrys;
  }

  public putUser(): void {
    /*this.userService.putUser(this.user).subscribe(
      data => {
      },
      err => {

      }
    );*/
  }
}
