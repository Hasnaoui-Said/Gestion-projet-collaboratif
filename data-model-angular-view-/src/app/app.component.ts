import { Component } from '@angular/core';
import {DimUserService} from './controller/service/dim-user.service';
import {DimUser} from './controller/model/dim-user.model';
import {AuthService} from './controller/service/auth.service';
import {TokenStorageService} from './controller/service/token-storage.service';
import {UserService} from "./controller/service/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-model-angular-view';
  constructor(private dimuserService: DimUserService,
              private authService: AuthService,
              private userService: UserService,
              private tokenStorage: TokenStorageService
  ) { }

  get isLoggedIns(): boolean {
    return this.userService.isLoggedIns;
  }

  set isLoggedIns(value: boolean) {
    this.userService.isLoggedIns = value;
  }

  /*test debut*/
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  signupForm: any;



  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  /*onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }*/

  /*reloadPage(): void {
    window.location.reload();
  }*/

  /*test fin*/
  get user(): DimUser {
    return this.dimuserService.user;
  }

  public  loginUser(){
    this.dimuserService.loginUser(this.user);
  }

  get msg(): string {
    return this.dimuserService.msg;
  }
  get booleans(): boolean {
    return this.dimuserService.booleans;
  }
  get isbooleans(): boolean {
    return this.dimuserService.booleans;
  }/*
  get isLoggedIns(): boolean {
    return this.menuComponent.isLoggedIns;
  }*/

}
