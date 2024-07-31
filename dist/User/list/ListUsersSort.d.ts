import { Sortable } from '../../common';
export declare enum ListUsersSortFields {
    email = "email",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    scope = "scope"
}
export type ListUsersSortBy = `${ListUsersSortFields}`;
export type ListUsersSortType = Sortable<ListUsersSortBy>;
