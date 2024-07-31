import { Wordkit } from '../Wordkit'

export type CreateWordkitInputType = Pick<Wordkit, 'level' | 'title'> & {
  courseId: string
}
