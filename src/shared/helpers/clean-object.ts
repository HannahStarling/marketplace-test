import { isArray, isNil, isObject } from 'lodash';

type CleanObject<T> = T extends Array<infer U> ? CleanObject<U>[] : T extends Record<string, any> ? { [K in keyof T]?: CleanObject<T[K]> } : T;

/* Функция для очистки объектов от null и undefined значений* */

/* Функция для очистки объектов от null и undefined значений */
export const cleanObject = <T>(obj: T): CleanObject<T> => {
  if (isObject(obj)) {
    if (isArray(obj)) {
      return obj.map(cleanObject).filter((item) => !isNil(item)) as CleanObject<T>;
    }
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => [key, cleanObject(value)])
        .filter(([, value]) => !isNil(value))
    ) as CleanObject<T>;
  }
  return obj as CleanObject<T>;
};
