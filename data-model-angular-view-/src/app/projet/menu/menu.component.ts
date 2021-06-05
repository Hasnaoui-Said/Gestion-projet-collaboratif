import { Component, OnInit } from '@angular/core';
import {DimUserService} from '../../controller/service/dim-user.service';
import {DimUser} from '../../controller/model/dim-user.model';
import {AuthService} from '../../controller/service/auth.service';
import {TokenStorageService} from '../../controller/service/token-storage.service';
import {UserService} from '../../controller/service/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  currentUser: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  br = false;
  errorMessage = '';
  roles: string[] = [];
  signupForm: any;

  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor( private userService: DimUserService,
               private authService: AuthService,
               private userServices: UserService,
               private tokenStorage: TokenStorageService,
               private token: TokenStorageService,
               private router: Router
  ) { }


  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

      this.isLoggedIns = true;
      console.log('menu is logs if ' + this.isLoggedIns);
      console.log('menu is log ' + this.isLoggedIn);
    }else if (!this.tokenStorage.getToken()) {
      this.isLoggedIns = true;
      console.log('menu is logs if ' + this.isLoggedIns);
      console.log('menu is log ' + this.isLoggedIn);
    }
    this.isLoggedIn = !!this.tokenStorage.getToken();

    /*if (this.isLoggedIn) {
      this.reloadPage();
    }*/
    if (this.isLoggedIn) {
      /*if (!this.br){
        location.reload();
        this.br = true;
      }*/
      this.isLoggedIns = true;

      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  get isLoggedIns(): boolean {
    return this.userServices.isLoggedIns;
      if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

        this.currentUser = this.token.getUser();
    }
  }

  set isLoggedIns(value: boolean) {
    this.userServices.isLoggedIns = value;
  }

  private goToRoot(){
    this.router.navigate(['/']);
    this.isLoggedIns = false;
  }
/*test*/

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
       /* this.reloadPage();*/
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

  logout(): void {
    this.tokenStorage.signOut();
    /*this.reloadPage();*/
    this.goToRoot();
    this.isLoggedIns = false;
  }
/*fin test*/

  get user(): DimUser {
    return this.userService.user;
  }

  /*public  logoutUser(){
    this.booleans = false;
    this.userService.logoutUser;
  }*/

  get booleans(): boolean {
    return this.userService.booleans;
  }

}

