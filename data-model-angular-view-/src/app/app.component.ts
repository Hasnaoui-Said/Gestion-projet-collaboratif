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
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  signupForm: any;
  private _clicLogin: boolean;

  currentUser: any;
  constructor(private dimuserService: DimUserService,
              private authService: AuthService,
              private userService: UserService,
              private tokenStorage: TokenStorageService,
              private token: TokenStorageService,
              private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.isLoggedIns = true;
      console.log('app is logs if ' + this.isLoggedIns + ' + ' + this.tokenStorage.getToken());
      console.log('app is log ' + this.isLoggedIn);
    } else if (!this.tokenStorage.getToken()) {
      console.log('app is logs else ss1324 ' + this.isLoggedIns + ' + ' + this.tokenStorage.getToken());
      console.log('app is log isLoggedIn ' + this.isLoggedIn);
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

  set isLoggedInTest(value: boolean) {
    this._isLoggedInTest = value;
  }

  get isLoggedIns(): boolean {
    return this.userService.isLoggedIns;
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

  private goToLogin(){
    this.router.navigate(['/login']);
  }

  /*get clicLogin(): boolean {
    return this._clicLogin;
  }

  set clicLogin(value: boolean) {
    this._clicLogin = value;
  }*/

  /*test debut*/

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

  reloadPage(): void {
    window.location.reload();
  }

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
  }
  /*
  get isLoggedIns(): boolean {
    return this.menuComponent.isLoggedIns;
  }*/

}
