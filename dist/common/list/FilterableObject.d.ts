import { Filterable } from './Filterable';
export type FilterableObject<Entity> = {
    [key in keyof Entity]?: Filterable<Entity[key]> | FilterableObject<Entity> | FilterableObject<Entity>[];
};
