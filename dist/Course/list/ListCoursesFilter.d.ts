import { FilterableObject } from '../../common';
import { Profile } from '../../Profile';
import { Course } from '../Course';
export type ListCoursesFilterType = FilterableObject<Pick<Course, 'title' | 'createdAt' | 'updatedAt'>> & {
    owner?: FilterableObject<Omit<Profile, 'user'>>;
};
