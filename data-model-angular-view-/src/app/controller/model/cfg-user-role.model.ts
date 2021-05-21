import {DimUser} from './dim-user.model';
import {CfgRole} from './cfg-role.model';

export class CfgUserRole {
  public UserRoleId: number;
  public roleId: CfgRole;
  public userId: DimUser;
  public constructor() {
    this.roleId = new CfgRole();
    this.userId = new DimUser();
  }
}
