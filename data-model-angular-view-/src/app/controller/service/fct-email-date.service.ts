import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FctEmailData} from '../model/fct-email-data.model';
import {DimUser} from '../model/dim-user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FctEmailDateService {
  private _emailData: FctEmailData;
  private _emailDataReturn: FctEmailData;
  private _emailDataBack: FctEmailData;
  private _isExist: string;
  private _emailDatas: Array<FctEmailData>;

  private url = 'http://localhost:8036//news-lettre-app';

  constructor(private http: HttpClient) {
  }
  public findAll() {
    this.http.get<Array<FctEmailData>>(this.url + '/fct-email-data/').subscribe(
      data => {
        this.emailDatas = data;
      }, error => {
        alert('error lors du loading Data e-mail');
      }
    );
  }
  public save() {
    this.http.post<number>(this.url + '/fct-email-data/', this.emailData).subscribe(
      data => {
        if (data > 0) {
          this.emailDatas.push(this.clone(this.emailData));
          this.emailData = null;
        }
      }, error => {
        alert('error lors du loading users');
        this.isExist = 'e_mail deja exist';
      }
    );
  }
  public checked(){
    this.http.post<FctEmailData>(this.url + '/fct-email-data/checked/', this.emailData).subscribe(
      data => {
        if (data != null){
          this.emailDataReturn = data;
          console.log('passed' + data.email);
          console.log('passed' + data.versandCounte);
        }
      }, error => {
        console.log('error');
      }
    );
  }
  public clear() {
    this.emailDataBack = this.emailData ;
    this.emailData = null;
  }
  public return() {
    this.emailData = this.emailDataBack ;
  }

  private clone(emailData: FctEmailData) {
    const cloneEmail = new FctEmailData();
    cloneEmail.email = emailData.email;
    cloneEmail.phone = emailData.phone;
    cloneEmail.city = emailData.city;
    cloneEmail.firmaName = emailData.firmaName;
    cloneEmail.codePost = emailData.codePost;
    cloneEmail.cat_id.name = emailData.cat_id.name;
    cloneEmail.ct_id.reference = emailData.ct_id.reference;
    cloneEmail.state_id.name = emailData.state_id.name;
    cloneEmail.user_id.userName = emailData.user_id.userName;
    return cloneEmail;
  }

  get emailData(): FctEmailData {
    if (this._emailData == null){
      this._emailData = new FctEmailData();
    }
    return this._emailData;
  }

  set emailData(value: FctEmailData) {
    this._emailData = value;
  }
  get emailDataReturn(): FctEmailData {
    if (this._emailDataReturn == null){
      this._emailDataReturn = new FctEmailData();
    }
    return this._emailDataReturn;
  }

  set emailDataReturn(value: FctEmailData) {
    this._emailDataReturn = value;
  }
  get emailDataBack(): FctEmailData {
    if (this._emailDataBack == null){
      this._emailDataBack = new FctEmailData();
    }
    return this._emailDataBack;
  }

  set emailDataBack(value: FctEmailData) {
    this._emailDataBack = value;
  }

  get emailDatas(): Array<FctEmailData> {
    if (this._emailDatas == null){
      this._emailDatas = new Array<FctEmailData>();
    }
    return this._emailDatas;
  }

  set emailDatas(value: Array<FctEmailData>) {
    this._emailDatas = value;
  }


  get isExist(): string {
    if (this._isExist == null){
      this._isExist = '';
    }
    return this._isExist;
  }

  set isExist(value: string) {
    this._isExist = value;
  }
}
