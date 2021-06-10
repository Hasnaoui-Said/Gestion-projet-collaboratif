import {DimCountry} from './dim-country.model';

export class DimUser {
  public id: number;
  public lastname: string;
  public firstname: string;
  public phone: string;
  public codePoste: string;
  public ville: string;
  public cin: string;
  public dateNess: string;
  public email: string;
  public username: string;
  public state: string;
  // tslint:disable-next-line:variable-name
  public ct_id: DimCountry;

  constructor() {
    this.lastname = '';
    this.firstname = '';
    this.username = '';
    this.state = '';
    this.phone = '';
    this.dateNess = '';
    this.ville = '';
    this.email = '';
    this.codePoste = '';
    this.ct_id = new DimCountry();
  }
}
