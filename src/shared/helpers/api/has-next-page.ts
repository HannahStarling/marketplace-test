// Функция для проверки, есть ли следующая страница
export const hasNextPage = (total: number, rangeEnd: number): boolean => {
  return total > rangeEnd;
};
