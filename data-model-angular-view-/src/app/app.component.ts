import { Component } from '@angular/core';
import {DimUserService} from './controller/service/dim-user.service';
import {DimUser} from './controller/model/dim-user.model';
import {AuthService} from './controller/service/auth.service';
import {TokenStorageService} from './controller/service/token-storage.service';
import {UserService} from './controller/service/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-model-angular-view';

  form: any = {};
  isLoggedIn = false;
  private _isLoggedInTest = false;
  errorMessage = '';
  roles: string[] = [];
  signupForm: any;

  currentUser: any;
  constructor(private dimuserService: DimUserService,
              private authService: AuthService,
              private userService: UserService,
              private tokenStorage: TokenStorageService,
              private token: TokenStorageService,
              private router: Router,
  ) { }

  public ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.isLoggedIns = true;
    } else if (!this.tokenStorage.getToken()) {
      this.isLoggedIns = true;
    }
    this.currentUser = this.token.getUser();
  }

  get isLogged(): boolean {
    if (this._isLoggedInTest == null){
      this._isLoggedInTest = false;
    }
    if (!this.tokenStorage.getToken()) {
      this._isLoggedInTest = false;
    }else if (this.tokenStorage.getToken()) {
      this._isLoggedInTest = true;
    }
    return this._isLoggedInTest;
  }

  get userRoles(): string[] {
    return this.roles;
  }
  set userRoles(value: string []) {
    this.roles = value;
  }

  set isLoggedIns(value: boolean) {
    this.userService.isLoggedIns = value;
  }

  reloadPage(): void {
    window.location.reload();
  }

  /*test fin*/

  get msg(): string {
    return this.dimuserService.msg;
  }
  get booleans(): boolean {
    return this.dimuserService.booleans;
  }
  get isbooleans(): boolean {
    return this.dimuserService.booleans;
  }
  /*
  get isLoggedIns(): boolean {
    return this.menuComponent.isLoggedIns;
  }*/


}
