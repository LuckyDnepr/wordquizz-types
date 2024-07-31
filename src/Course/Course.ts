import { Base } from '../database'
import { User } from '../User'

export type Course = Base & {
  title: string
  owner: User
  listeners?: User[]
  // wordkits: Wordkit[];
}
