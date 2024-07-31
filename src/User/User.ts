import { UserScope } from './UserScope';

import { Base } from '../database';
import { Profile } from '../Profile';

export type User = Base & {
  email: string;
  password?: string;
  token?: string;
  scope: UserScope;
  profile?: Profile;
};
