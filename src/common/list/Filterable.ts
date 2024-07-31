import { FilterRules } from '../../constants';

export type Filterable<FieldType = unknown> = {
  rule: FilterRules;
  value?: FieldType | FieldType[];
};
