import { isArray, isNil, isObject } from 'lodash';
import { CleanObject } from '@/types/common';

/** Функция для очистки объектов от null и undefined значений * */
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
