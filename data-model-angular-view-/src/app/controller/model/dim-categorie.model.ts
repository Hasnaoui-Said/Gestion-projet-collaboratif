import {DimCatPrioritie} from './dim-cat-prioritie.model';

export class DimCategorie {
  public catid: number;
  public name: string;
  public priorityId: DimCatPrioritie;
  constructor() {
    this.name = '';
    this.priorityId = new DimCatPrioritie();
  }
}
