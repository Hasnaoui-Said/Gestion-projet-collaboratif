import { Injectable } from '@angular/core';
import {DimCategorie} from '../model/dim-categorie.model';
import {DimCatPrioritie} from '../model/dim-cat-prioritie.model';
import {HttpClient} from '@angular/common/http';

const baseUrlData = 'http://localhost:8095/news-lettre-app';
@Injectable({
  providedIn: 'root'
})
export class DimCatPrioritieService {
  private _priority: DimCatPrioritie;
  private _prioritys: Array<DimCatPrioritie>;

  constructor(private http: HttpClient) { }


  public findAll() {
    this.http.get<Array<DimCatPrioritie>>(baseUrlData + '/dim-cat-prioritie/').subscribe(
      data => {
        this.prioritys = data;
      }, error => {
        alert('error lors du loading priotitie');
      }
    );
  }

  get priority(): DimCatPrioritie {
    if (this._priority == null){
      this._priority = new DimCatPrioritie();
    }
    return this._priority;
  }

  set priority(value: DimCatPrioritie) {
    this._priority = value;
  }

  get prioritys(): Array<DimCatPrioritie> {
    if (this._prioritys == null){
      this._prioritys = new Array<DimCatPrioritie>();
    }
    return this._prioritys;
  }

  set prioritys(value: Array<DimCatPrioritie>) {
    this._prioritys = value;
  }
}
