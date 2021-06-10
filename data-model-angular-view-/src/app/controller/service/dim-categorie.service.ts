import { Injectable } from '@angular/core';
import {DimCategorie} from '../model/dim-categorie.model';
import {DimCountry} from '../model/dim-country.model';
import {HttpClient} from '@angular/common/http';

const baseUrlData = 'http://localhost:8095/news-lettre-app';
@Injectable({
  providedIn: 'root'
})

export class DimCategorieService {

  private _categorie: DimCategorie;
  private _categories: Array<DimCategorie>;

  private url = 'http://localhost:8095/news-lettre-app';
  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<DimCategorie>>(baseUrlData + '/dim-categorie/').subscribe(
      data => {
        this.categories = data;
      }, error => {
        alert('error lors du loading Kategory');
      }
    );
  }

  get categorie(): DimCategorie {
    if (this._categorie == null){
      this._categorie = new DimCategorie();
    }
    return this._categorie;
  }

  set categorie(value: DimCategorie) {
    this._categorie = value;
  }

  get categories(): Array<DimCategorie> {
    if (this._categories == null){
      this._categories = new Array<DimCategorie>();
    }
    return this._categories;
  }

  set categories(value: Array<DimCategorie>) {
    this._categories = value;
  }


}
