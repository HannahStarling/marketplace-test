// Константы для имен полей
export const FIELD_NAMES = {
  ADDRESS: 'address',
  PHONE: 'phone',
  NAME: 'name',
  DELIVERY_DATE: 'deliveryDate',
  DELIVERY_TIME: 'deliveryTime',
} as const;

export type FieldNames = (typeof FIELD_NAMES)[keyof typeof FIELD_NAMES];

// Объект с метками и плейсхолдерами
export const FIELD_LABELS: Record<FieldNames, { label: string; placeholder?: string }> = {
  [FIELD_NAMES.ADDRESS]: { label: 'Куда доставить?', placeholder: 'Выберите адрес доставки' },
  [FIELD_NAMES.PHONE]: { label: 'Телефон' },
  [FIELD_NAMES.NAME]: { label: 'Имя' },
  [FIELD_NAMES.DELIVERY_DATE]: { label: 'Дата доставки' },
  [FIELD_NAMES.DELIVERY_TIME]: { label: 'Время доставки' },
};
