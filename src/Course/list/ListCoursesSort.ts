import { Sortable } from '../../common'

export enum ListCoursesSortFields {
  title = 'title',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export type ListCoursesSortBy = `${ListCoursesSortFields}`

export type ListCoursesSortType = Sortable<ListCoursesSortBy>
