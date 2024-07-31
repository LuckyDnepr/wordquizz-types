import { FilterableObject } from '../../common'
import { Profile } from '../../Profile'
import { User } from '../User'

export type ListUsersFilterType = FilterableObject<
  Pick<User, 'email' | 'scope' | 'createdAt' | 'updatedAt'>
> & {
  profile?: FilterableObject<Omit<Profile, 'user'>>
}
