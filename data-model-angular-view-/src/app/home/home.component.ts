import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../controller/service/dim-user.service';
import {UserService} from '../controller/service/user.service';
import {AppComponent} from '../app.component';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor(private userService: UserService,
              private dimUserService: DimUserService,
              private appComponent: AppComponent,
              config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }
  get isLogged(): boolean {
    return this.appComponent.isLogged;
  }
  get roles(): string [] {
    return this.appComponent.userRoles;
  }

  get isLoggedIns(): boolean {
    return this.userService.isLoggedIns;
  }

  set isLoggedIns(value: boolean) {
    this.userService.isLoggedIns = value;
  }

  get booleans(): boolean {
    return this.dimUserService.booleans;
  }
  get clic(): boolean {
    return this.dimUserService.clic;
  }
  set clic(value: boolean) {
    this.clic=true;
     this.dimUserService.clic;
  }

}
