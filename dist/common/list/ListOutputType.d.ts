export type ListOutputType<T> = {
    items: T[];
    page: number;
    pageSize: number;
    totalCount: number;
};
