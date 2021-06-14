import {Injectable} from '@angular/core';
import {DimUser} from '../model/dim-user.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {AuthService} from './auth.service';


const baseUrlData = 'http://localhost:8095/news-lettre-app';
@Injectable({
  providedIn: 'root'
})
export class DimUserService {

  private _user: DimUser;
  private _usersearsh: DimUser;
  private _msg: string;
  private _users: Array<DimUser>;

  private url = 'http://localhost:8095/news-lettre-app';
  private _booleans: boolean;
  private _logoutUser: boolean;
  private _clic: boolean;
  private _isExit: string;

  get clic(): boolean {
    if (this._clic == null){
      this._clic = false;
    }
    return this._clic;
  }

  set clic(value: boolean) {
    this._clic = value;
  }

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService,
  ) {
  }

  public findAll() {
    this.http.get<Array<DimUser>>(baseUrlData + '/dim-user/').subscribe(
      data => {
        this.users = data;
      }, error => {
        alert('error lors du loading users');
      }
    );
  }

  get user(): DimUser {
    if (this._user == null) {
      this._user = new DimUser();
    }
    return this._user;
  }

  set user(value: DimUser) {
    this._user = value;
  }


  get usersearsh(): DimUser {
    if (this._usersearsh == null) {
      this._usersearsh = new DimUser();
    }
    return this._usersearsh;
  }

  set usersearsh(value: DimUser) {
    this._usersearsh = value;
  }


  get msg(): string {
    if (this._msg == null) {
      this._msg = '';
    }
    return this._msg;
  }

  set msg(value: string) {
    this._msg = value;
  }

  get users(): Array<DimUser> {
    if (this._users == null) {
      this._users = new Array<DimUser>();
    }
    return this._users;
  }

  set users(value: Array<DimUser>) {
    this._users = value;
  }
  get username(): string {
    let un = this.authService.username;
    return un;
  }
  public findByUsername(userName: string) {
    this.http.get<DimUser>(baseUrlData + '/dim-user/username/' + this.username).subscribe(
      data => {
        if (data != null) {
          this.user = data;
          console.log('this name is dim user ' + this.username);
        }
      }, error => {
        console.log('notFounded dim user ' + this.username);
      }
    );
  }
  public loginUser(user: DimUser) {
    this.http.post<DimUser>(baseUrlData + '/dim-user/login/' , user).subscribe(
    data => {
      if (data != null) {
        this.booleans = true;
        this.user = data;
        this.router.navigate(['/menu']);
        console.log('reponce recieved ' + this.user.firstname);
      } else {
        console.log('reponce recieved bad user');
        this.msg = 'Bad credentials, enter an email et password valid';
      }
    },
    error => {
      console.log('execption occured');
    }
  );

  }


  get booleans(): boolean {
    if (this._booleans == null){
      this._booleans = false;
    }
    return this._booleans;
  }

  set booleans(value: boolean) {
    this._booleans = value;
  }
  get logoutUser(): boolean {
    if (this._logoutUser == null){
      this._logoutUser = false;
    }
    this.booleans = false;
    this.clic = false;
    return this._logoutUser;
  }

  set logoutUser(value: boolean) {
    this._logoutUser = value;
  }

  public searshUser(searsh: string) {
    this.http.get<Array<DimUser>>(baseUrlData + '/dim-user/searshUser/' + searsh).subscribe(
      data => {
        if (data != null) {
          this.users = data;
          console.log(this.users);
        }
      },
      error => {
        this.isExit = "n'existe pas ";
        this.findAll();
      }
    );
  }

  get isExit(): string {
    if (this._isExit == null){
      this._isExit = '';
    }
    return this._isExit;
  }

  set isExit(value: string) {
    this._isExit = value;
  }
}
