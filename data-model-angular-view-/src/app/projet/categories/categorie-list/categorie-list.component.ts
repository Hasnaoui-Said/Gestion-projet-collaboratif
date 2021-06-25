import { Component, OnInit } from '@angular/core';
import {DimCategorieService} from '../../../controller/service/dim-categorie.service';
import {DimCategorie} from '../../../controller/model/dim-categorie.model';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  public page = 1;
  public pageSize = 4;

  constructor(private categoriesService: DimCategorieService) { }

  ngOnInit(): void {
    this.categoriesService.findAll();
  }
  get categories(): Array<DimCategorie> {
    return this.categoriesService.categories;
  }

}
