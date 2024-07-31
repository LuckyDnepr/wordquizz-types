import { Levels } from '../constants';
import { Course } from '../Course';
import { Base } from '../database';
import { Word } from '../Word';
export type Wordkit = Base & {
    title: string;
    level: Levels;
    course: Course;
    words?: Word[];
};
