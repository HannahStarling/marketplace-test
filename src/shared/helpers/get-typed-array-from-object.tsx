/**
 * Возвращает ключи объекта в виде массива, сохраняя точную типизацию.
 * @param obj - Объект, из которого нужно получить ключи.
 * @returns Массив ключей объекта.
 */
export function getObjectKeys<T extends Record<string, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

export const getTypedObjectValues = <T,>(object: object): Array<T> => {
  return Object.values(object) as Array<T>;
};

export function getTypedObjectEntries<T extends object>(object: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(object) as Array<[keyof T, T[keyof T]]>;
}
