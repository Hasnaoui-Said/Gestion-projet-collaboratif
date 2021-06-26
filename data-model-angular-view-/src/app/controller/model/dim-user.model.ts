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
  public adresse: string;
  public email: string;
  public username: string;
  public state: boolean;
  // tslint:disable-next-line:variable-name
  public ct_id: DimCountry;

  constructor() {
    this.lastname = '';
    this.adresse = '';
    this.firstname = '';
    this.username = '';
    this.state = false;
    this.phone = '';
    this.dateNess = '';
    this.ville = '';
    this.email = '';
    this.codePoste = '';
    this.ct_id = new DimCountry();
  }
}
