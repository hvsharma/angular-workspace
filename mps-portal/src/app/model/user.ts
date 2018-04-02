import { Role } from './role';

export class User {

  userGUID: string;
  name: string;
  email: string;
  roles: Role[];
  userDOB: Date;
  userImage: string;

}
