import { Injectable } from '@angular/core';
import {DimEmailState} from '../model/dim-email-state.model';
import {HttpClient} from '@angular/common/http';
import {DimUser} from '../model/dim-user.model';

@Injectable({
  providedIn: 'root'
})
export class DimStateService {


  private _state: DimEmailState;
  private _states: Array<DimEmailState>;

  private url = 'http://localhost:8036//news-lettre-app';
  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<DimEmailState>>(this.url + '/dim-email-state/').subscribe(
      data => {
        this.states = data;
      }, error => {
        alert('error lors du loading users');
      }
    );
  }
  get state(): DimEmailState {
    if (this._state == null){
      this._state = new DimEmailState();
    }
    return this._state;
  }

  set state(value: DimEmailState) {
    this._state = value;
  }

  get states(): Array<DimEmailState> {
    if (this._states == null){
      this._states = new Array<DimEmailState>();
    }
    return this._states;
  }

  set states(value: Array<DimEmailState>) {
    this._states = value;
  }
}
