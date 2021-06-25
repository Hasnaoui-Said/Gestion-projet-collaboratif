import { Component, OnInit } from '@angular/core';
import {DimCatPrioritieService} from '../../../controller/service/dim-cat-prioritie.service';
import {DimCatPrioritie} from '../../../controller/model/dim-cat-prioritie.model';

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent implements OnInit {

  constructor(private catProi: DimCatPrioritieService) { }

  ngOnInit(): void {
    this.catProi.findAll();
  }

  get prioritys(): Array<DimCatPrioritie> {
    return this.catProi.prioritys;
  }
}
