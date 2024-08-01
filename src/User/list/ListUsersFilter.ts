import { FilterableObject } from '../../common'
import { Profile } from '../../Profile'
import { User } from '../User'

export type ListUsersFilterType = FilterableObject<
  Omit<User, 'token' | 'password' | 'profile'>
> & {
  profile?: FilterableObject<Omit<Profile, 'user'>>
}
