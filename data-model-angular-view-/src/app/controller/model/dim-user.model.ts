import {DimCountry} from './dim-country.model';

export class DimUser {
  public userId: number;
  public lastName: string;
  public firstName: string;
  public phone: string;
  public ville: string;
  public email: string;
  public password: string;
  public userName: string;
  public stateUser: string;
  // tslint:disable-next-line:variable-name
  public ct_id: DimCountry;

  constructor() {
    this.lastName = '';
    this.firstName = '';
    this.userName = '';
    this.stateUser = '';
    this.phone = '';
    this.ville = '';
    this.email = '';
    this.password = '';
    this.ct_id = new DimCountry();
    this.userName = '';
  }
}
