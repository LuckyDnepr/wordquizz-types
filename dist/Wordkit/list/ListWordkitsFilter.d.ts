import { FilterableObject } from '../../common';
import { Course } from '../../Course';
import { Wordkit } from '../Wordkit';
export type ListWordkitsFilterType = FilterableObject<Pick<Wordkit, 'id' | 'title' | 'level' | 'createdAt' | 'updatedAt'>> & {
    course?: FilterableObject<Omit<Course, 'listeners'>>;
};
