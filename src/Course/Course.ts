import { Base } from '../database'
import { User } from '../User'
import { Wordkit } from '../Wordkit'

export type Course = Base & {
  title: string
  owner: User
  listeners?: User[]
  wordkits: Wordkit[];
}
