import { Component, OnInit } from '@angular/core';
import {DimCategorie} from '../../controller/model/dim-categorie.model';
import {DimCategorieService} from '../../controller/service/dim-categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: DimCategorieService) { }

  ngOnInit(): void {
  }
  get categories(): Array<DimCategorie> {
    return this.categoriesService.categories;
  }
}
