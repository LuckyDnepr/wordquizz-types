import { User } from '../User';
export type CreateUserInputType = Partial<Pick<User, 'password'>> & Pick<User, 'email'>;
