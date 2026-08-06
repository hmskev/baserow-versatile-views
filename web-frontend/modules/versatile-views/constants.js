/**
 * Field types that can serve each role in our views.
 *
 * These mirror the checks the backend makes in `CardViewType.prepare_values`, so the
 * dropdowns never offer a field the API would reject. `formula` is included for the
 * date roles because a formula field can return a date; the backend asks the field
 * type whether it can represent a date rather than trusting the name.
 */
export const DATE_FIELD_TYPES = [
  'date',
  'last_modified',
  'created_on',
  'formula',
]

export const FILE_FIELD_TYPES = ['file']

export const SINGLE_SELECT_FIELD_TYPES = ['single_select']

/**
 * Only a plain date field can be written back to, so dragging a record to a new date
 * is offered for these types alone. A created_on or last_modified value is maintained
 * by Baserow and a formula is computed.
 */
export const WRITABLE_DATE_FIELD_TYPES = ['date']
