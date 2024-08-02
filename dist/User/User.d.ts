import { UserScope } from './UserScope';
import { Base } from '../database';
import { Profile } from '../Profile';
import { Course } from '../Course';
export type User = Base & {
    email: string;
    password?: string;
    token?: string;
    scope: UserScope;
    profile?: Profile;
    ownedCourses?: Course[];
    listenedCourses?: Course[];
};
