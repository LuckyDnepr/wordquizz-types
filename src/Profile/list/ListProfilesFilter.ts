import { FilterableObject } from '../../common'
import { User } from '../../User'
import { Profile } from '../Profile'

export type ListProfilesFilterType = FilterableObject<Omit<Profile, 'user'>> & {
  user?: FilterableObject<Pick<User, 'scope' | 'createdAt' | 'updatedAt'>>
}
