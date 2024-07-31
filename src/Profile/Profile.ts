import { Roles } from './Roles';

import { Base } from '../database';
import { User } from '../User';

export type Profile = Base & {
  firstName: string;
  lastName: string;
  nickName: string;
  birthday: Date;
  role: Roles;
  user: User;
  // listenedCourses: any[];
  // ownedCourses: any[];
};
