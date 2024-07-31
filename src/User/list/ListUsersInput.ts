import { ListUsersFilterType } from './ListUsersFilter'
import { ListUsersSortType } from './ListUsersSort'

import { ListInputType } from '../../common'

export type ListUsersInputType = ListInputType<
  ListUsersSortType,
  ListUsersFilterType
>
