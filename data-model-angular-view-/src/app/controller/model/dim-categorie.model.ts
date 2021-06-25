import {DimCatPrioritie} from './dim-cat-prioritie.model';

export class DimCategorie {
  public cat_id: number;
  public name: string;
  public priority_id: DimCatPrioritie;
  constructor() {
    this.name = '';
    this.priority_id = new DimCatPrioritie();
  }
}
