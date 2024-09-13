import { stringify } from 'query-string';
import { CreateQueryParams } from '@shared/api/api-service';
import { cleanObject } from '@shared/helpers/clean-object';
import { getObjectKeys } from '@shared/helpers/get-typed-array-from-object';

// Функция для формирования строки запроса с ручной сериализацией массивов и объектов
export const buildQueryParams = (params: CreateQueryParams): string => {
  // Очищаем значения от null и undefined
  const cleanedParams = cleanObject(params);

  // Преобразуем массивы и объекты в строки
  const formattedParams: Record<string, string> = {};

  getObjectKeys(cleanedParams).forEach((key) => {
    const value = cleanedParams[key];

    // Преобразуем массивы в строку JSON
    formattedParams[key] = JSON.stringify(value);
  });

  // Формируем строку запроса
  return stringify(formattedParams, { encode: false });
};
