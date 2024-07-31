import { Profile } from '../Profile'

export type CreateProfileInputType = Partial<
  Pick<Profile, 'firstName' | 'lastName' | 'birthday'>
> &
  Pick<Profile, 'nickName' | 'role'>
