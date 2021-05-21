import {DimCountry} from './dim-country.model';
import {DimCategorie} from './dim-categorie.model';
import {DimUser} from './dim-user.model';
import {DimEmailState} from './dim-email-state.model';

export class FctEmailData {
  public email_id: number;
  public email: string;
  public phone: string;
  public city: string;
  public codePost: string;
  public firmaName: string;
  public bundesland: string;
  public emailDate: string;
  public versandArt: string;
  public versandCounte: number;
  public part: number;
  public changeDate: string;
  public versandDate: Date;
  public ct_id: DimCountry;
  public cat_id: DimCategorie;
  public state_id: DimEmailState;
  public user_id: DimUser;

  constructor() {
    this.email = '';
    this.phone = '';
    this.city = '';
    this.versandCounte = 0;
    this.part = 0;
    this.codePost = '';
    this.changeDate = '';
    this.versandArt = '';
    this.bundesland = '';
    this.firmaName = '';
    this.ct_id = new DimCountry();
    this.versandDate = new Date();
    this.cat_id = new DimCategorie();
    this.state_id = new DimEmailState();
    this.user_id = new DimUser();
  }
}
