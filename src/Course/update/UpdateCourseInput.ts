import { Course } from '../Course'

export type UpdateCourseInputType = Partial<Pick<Course, 'title'>> &
  Pick<Course, 'id'>
