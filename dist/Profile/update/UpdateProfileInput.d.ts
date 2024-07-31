import { Profile } from '../Profile';
export type UpdateProfileInputType = Partial<Pick<Profile, 'firstName' | 'lastName' | 'birthday'>> & Pick<Profile, 'id'>;
