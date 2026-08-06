/**
 * Grouping rows by the value of a field.
 *
 * The List view uses this for its sections and the Timeline view for its swimlanes.
 * Kanban does its own thing, because it must show every select option as a stack even
 * when no record currently has that option.
 */

/**
 * Reduces a field value to a stable string used both as the group key and its label.
 *
 * Field values have very different shapes: a single select is an object, a multiple
 * select or a link row is an array, a plain text field is a string. Baserow's field
 * types know how to turn any of them into readable text, so use that and fall back to
 * a direct reading only when the field type cannot.
 */
export function groupValueToLabel(row, field, registry) {
  const value = row[`field_${field.id}`]

  if (value === null || value === undefined || value === '') {
    return null
  }

  try {
    const fieldType = registry.get('field', field.type)
    const text = fieldType.toHumanReadableString(field, value)
    return text === '' ? null : text
  } catch (error) {
    // A field type that cannot produce readable text still needs a usable key.
    if (Array.isArray(value)) {
      return value.length === 0 ? null : value.map((item) => item?.value ?? item).join(', ')
    }
    if (typeof value === 'object') {
      return value.value ?? value.name ?? String(value.id ?? '')
    }
    return String(value)
  }
}

/**
 * Splits rows into groups by a field's value, preserving the order rows arrive in.
 *
 * Rows with no value are collected into one trailing group, so an empty value never
 * silently drops a record from the view.
 *
 * @param rows        The rows to group.
 * @param field       The field to group by.
 * @param registry    The Baserow registry, used to render values as text.
 * @param emptyLabel  The label for the group holding rows with no value.
 * @return An array of { key, label, rows }.
 */
export function groupRowsByField(rows, field, registry, emptyLabel = 'Empty') {
  const groups = new Map()
  const EMPTY_KEY = '__empty__'

  for (const row of rows) {
    const label = groupValueToLabel(row, field, registry)
    const key = label === null ? EMPTY_KEY : label

    if (!groups.has(key)) {
      groups.set(key, {
        key,
        label: label === null ? emptyLabel : label,
        rows: [],
      })
    }
    groups.get(key).rows.push(row)
  }

  // Rows without a value belong at the end rather than wherever they first appeared.
  const result = [...groups.values()]
  const emptyIndex = result.findIndex((group) => group.key === EMPTY_KEY)
  if (emptyIndex > -1) {
    result.push(result.splice(emptyIndex, 1)[0])
  }

  return result
}
