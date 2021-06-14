import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {DimUser} from '../model/dim-user.model';

const baseUrlData = 'http://localhost:8095/news-lettre-app';
const baseUrlDataAuth = 'http://localhost:8095/news-lettre-app/auth-controller';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _username: string;
  private _user: DimUser;
  constructor(
    private http: HttpClient,
  ) { }


  public findByEmail(email: string) {
    this.http.get<DimUser>(baseUrlData + '/dim-user/email/' + email).subscribe(
      data => {
        if (data != null) {
          this.user = data;
          /*console.log('this name is auth service ' + email);*/
        }
      }, error => {
        console.log('notFounded auth service mail');
      }
    );
  }

  login(credentials): Observable<any> {
    this.username = this.cloneUser(credentials.username);
    return this.http.post(baseUrlDataAuth + '/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  private cloneUser(value: string) {
    let cloneValue =  '';
    cloneValue = value;
    return cloneValue;
  }
  get username(): string {
    if (this._username == null){
      this._username = '';
    }
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }
  register(user): Observable<any> {
    return this.http.post(baseUrlDataAuth + '/signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }


  get user(): DimUser {
    if (this._user == null){
      this._user = new DimUser();
    }
    return this._user;
  }

  set user(value: DimUser) {
    this._user = value;
  }
}
