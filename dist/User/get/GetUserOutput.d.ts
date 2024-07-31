import { User } from '../User';
export type GetUserOutputType = Omit<User, 'password' | 'token'>;
