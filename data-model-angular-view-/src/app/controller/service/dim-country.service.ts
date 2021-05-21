import { Injectable } from '@angular/core';
import {DimCountry} from '../model/dim-country.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DimCountryService {

  private _country: DimCountry;
  private _countrys: Array<DimCountry>;

  private url = 'http://localhost:8036//news-lettre-app';
  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<DimCountry>>(this.url + '/dim-country/').subscribe(
      data => {
        this.countrys = data;
      }, error => {
        alert('error lors du loading countrys');
      }
    );
  }

  get country(): DimCountry {
    if (this._country == null){
      this._country = new DimCountry();
    }
    return this._country;
  }

  set country(value: DimCountry) {
    this._country = value;
  }

  get countrys(): Array<DimCountry> {
    if (this._countrys == null){
      this._countrys = new Array<DimCountry>();
    }
    return this._countrys;
  }

  set countrys(value: Array<DimCountry>) {
    this._countrys = value;
  }
}
