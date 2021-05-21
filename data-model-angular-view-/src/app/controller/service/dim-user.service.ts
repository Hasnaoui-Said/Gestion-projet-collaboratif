import {Injectable} from '@angular/core';
import {DimUser} from '../model/dim-user.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DimUserService {

  private _user: DimUser;
  private _msg: string;
  private _users: Array<DimUser>;

  private url = 'http://localhost:8036//news-lettre-app';
  private _booleans: boolean;
  private _logoutUser: boolean;
  private _clic: boolean;

  get clic(): boolean {
    if (this._clic == null){
      this._clic = false;
    }
    return this._clic;
  }

  set clic(value: boolean) {
    this._clic = value;
  }

  constructor(private http: HttpClient, private router: Router ) {
  }

  public findAll() {
    this.http.get<Array<DimUser>>(this.url + '/dim-user/').subscribe(
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

  public loginUser(user: DimUser) {
    this.http.post<DimUser>(this.url + '/dim-user/login/' , user).subscribe(
    data => {
      if (data != null) {
        this.booleans = true;
        this.user = data;
        this.router.navigate(['/menu']);
        console.log('reponce recieved ' + this.user.firstName);
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
}
