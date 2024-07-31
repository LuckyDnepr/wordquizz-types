import { Wordkit } from '../Wordkit'

export type UpdateWordkitInputType = Pick<Wordkit, 'id'> &
  Partial<Pick<Wordkit, 'level' | 'title'>>
