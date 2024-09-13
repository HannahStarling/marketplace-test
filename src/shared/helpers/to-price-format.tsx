import { EMPTY_STRING, UnicodeStrings } from '@/shared/constants/common-strings';

export const toPriceFormat = (price?: number | string | null, hideCurrency?: boolean): string => {
  if (!price) return `0${UnicodeStrings.Ruble}`;
  return `${price.toLocaleString('ru')}${!hideCurrency ? UnicodeStrings.Ruble : EMPTY_STRING}`;
};
