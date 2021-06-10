import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../controller/service/dim-user.service';
import {DimUser} from '../controller/model/dim-user.model';
import {NgForm} from '@angular/forms';
import {AuthService} from '../controller/service/auth.service';
import {TokenStorageService} from '../controller/service/token-storage.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../controller/service/user.service';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/*apres*/

  private form: any = {};
  isLoggedIn = false;
  private _userName: string;
  private _email: string;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
              private router: Router,
              private tokenStorage: TokenStorageService,
              private http: HttpClient,
              private userService: UserService,
              private appComponent: AppComponent,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.isLoggedIns = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  get isLoggedIns(): boolean {
    return this.userService.isLoggedIns;
  }

  set isLoggedIns(value: boolean) {
    this.userService.isLoggedIns = value;
  }

  private goToMenu(){
    this.router.navigate(['/menu']);
    /*this.reloadPage();
    window.location.reload();
    this.router.navigate(['/menu']);*/
  }


  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = false;
        this.isLoggedIns = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.email = this.tokenStorage.getUser().email;
        console.log('login  1 ' + this.roles);
        console.log('login  2 ' + this.email);
        console.log('login  3 ' + this.userRoles);
        this.userRoles = this.tokenStorage.getUser().roles;
        /*this.reloadPage();*/
        this.goToMenu();
        this.isLoggedIns = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isLoggedIns = false;
      }
    );
  }

  get email(): string {
    if (this._email == null){
      this._email = '';
    }
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get userRoles(): string [] {
    return this.appComponent.userRoles;
  }
  set userRoles(value: string []) {
     this.appComponent.userRoles = value;
  }
  reloadPage(): void {
    window.location.reload();
  }


  get userName(): string {
    if (this._userName == null){
      this._userName = '';
    }
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  /* avant
 constructor(private userService: DimUserService) { }

  ngOnInit(): void {
  }
  get user(): DimUser {
    return this.userService.user;
  }

  public  loginUser(){
    this.userService.loginUser(this.user);
  }

  get msg(): string {
    return this.userService.msg;
  }
  get booleans(): boolean {
    return this.userService.booleans;
  }*/

}
