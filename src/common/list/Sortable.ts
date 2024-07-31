import { SortDirection } from '../../constants'

export type Sortable<FieldList> = {
  field: FieldList
  direction: SortDirection
}
